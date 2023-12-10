import { User, Prisma } from "@prisma/client";
import { Context, Error } from "../../models";
import { admin } from "../../firebaseConfig/firebase-config";
import { UserRecord } from "firebase-admin/lib/auth/user-record";
import { GraphQLError } from "graphql";

interface UserProps {
	user: {
		firstName: string;
		lastName: string;
		username: string;
		email: string;
		password: string;
	};
}

interface FriendShipProps {
	userUid: string;
}

interface FriendShipRequestProps {
	receiverUid: string;
}

type UserPayloadType = null | Prisma.Prisma__UserClient<User, never> | User;

export const userResolvers = {
	registerUser: async (
		_: any,
		{ user }: UserProps,
		{ prisma }: Context
	): Promise<UserPayloadType> => {
		const { email, firstName, lastName, username, password } = user;

		if (!firstName) throw new GraphQLError("you must provide a firstName");
		if (!lastName) throw new GraphQLError("you must provide a lastName");
		if (!email) throw new GraphQLError("you must provide an email");
		if (!username) throw new GraphQLError("you must provide a username");

		let result = {} as UserRecord;

		try {
			result = await admin.auth().createUser({
				email,
				password,
			});
		} catch (error: any) {
			throw new GraphQLError(error.message, {
				extensions: {
					code: error.code,
				},
			});
		}

		try {
			const newUser = await prisma.user.create({
				data: {
					firstName,
					email,
					lastName,
					username,
					uid: result.uid,
				},
			});

			return newUser;
		} catch (error) {
			await admin.auth().deleteUser(result.uid);

			if (
				error instanceof Prisma.PrismaClientKnownRequestError &&
				error.code === "P2002"
			) {
				throw new GraphQLError("Username already exists");
			}

			throw new GraphQLError(JSON.stringify(error));
		}
	},
	addFriend: async (
		_: any,
		{ receiverUid }: FriendShipRequestProps,
		{ prisma, userInfo }: Context
	) => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access  (unauthenticated)");
		}

		try {
			const receiverExists = await prisma.user.findUnique({
				where: { uid: receiverUid },
			});

			if (!receiverExists) {
				throw new GraphQLError("Receiver does not exist.");
			}

			const existingRequest = await prisma.friendRequest.findFirst({
				where: {
					senderUid: userInfo.userUid,
					receiverUid,
				},
			});

			const existingRequestByFriend =
				await prisma.friendRequest.findFirst({
					where: {
						senderUid: receiverUid,
						receiverUid: userInfo.userUid,
					},
				});

			//  This check is for securing API abstraction
			if (existingRequest || existingRequestByFriend) {
				throw new GraphQLError("Friend request already sent.");
			}

			const friendRequest = await prisma.friendRequest.create({
				data: {
					sender: { connect: { uid: userInfo.userUid } },
					receiver: { connect: { uid: receiverUid } },
					User: { connect: { uid: userInfo.userUid } },
				},
			});

			return friendRequest;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	confirmFriendRequest: async (
		_: any,
		{ userUid }: FriendShipProps,
		{ prisma, userInfo }: Context
	) => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access  (unauthenticated)");
		}

		try {
			await prisma.user.update({
				where: { uid: userInfo.userUid },
				data: { friends: { connect: [{ uid: userUid }] } },
			});

			const user = await prisma.user.update({
				where: { uid: userUid },
				data: { friends: { connect: [{ uid: userInfo.userUid }] } },
			});

			await prisma.friendRequest.deleteMany({
				where: {
					receiverUid: userInfo.userUid,
					senderUid: userUid,
				},
			});

			return user;
		} catch (error) {
			await prisma.user.update({
				where: { uid: userInfo.userUid },
				data: { friends: { disconnect: [{ uid: userUid }] } },
			});

			await prisma.user.update({
				where: { uid: userUid },
				data: { friends: { disconnect: [{ uid: userInfo.userUid }] } },
			});

			throw new GraphQLError(JSON.stringify(error));
		}
	},
	rejectFriendRequest: async (
		_: any,
		{ userUid }: FriendShipProps,
		{ prisma, userInfo }: Context
	) => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access  (unauthenticated)");
		}

		try {
			// Check if the friend request exists and the requester is the sender
			const friendRequest = await prisma.friendRequest.findFirst({
				where: {
					receiverUid: userInfo.userUid,
					senderUid: userUid,
				},
				include: {
					sender: true,
				},
			});

			console.log(userUid, userInfo);

			if (!friendRequest || friendRequest.sender.uid !== userUid) {
				throw new GraphQLError(
					"Friend request not found or you are not the sender."
				);
			}

			// Delete the friend request
			const result = await prisma.friendRequest.deleteMany({
				where: {
					receiverUid: userInfo.userUid,
					senderUid: userUid,
				},
			});

			return result;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	cancelFriendRequest: async (
		_: any,
		{ userUid }: FriendShipProps,
		{ prisma, userInfo }: Context
	) => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access  (unauthenticated)");
		}

		try {
			// Check if the friend request exists and the requester is the sender
			const friendRequest = await prisma.friendRequest.findFirst({
				where: {
					receiverUid: userUid,
					senderUid: userInfo.userUid,
				},
				include: {
					sender: true,
				},
			});

			if (
				!friendRequest ||
				friendRequest.senderUid !== userInfo.userUid
			) {
				throw new GraphQLError(
					"Friend request not found or you are not the sender."
				);
			}

			// Delete the friend request
			const result = await prisma.friendRequest.deleteMany({
				where: {
					receiverUid: userUid,
					senderUid: userInfo.userUid,
				},
			});

			return result;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	unfriend: async (
		_: any,
		{ userUid }: FriendShipProps,
		{ prisma, userInfo }: Context
	) => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		try {
			await prisma.user.update({
				where: { uid: userInfo.userUid },
				data: { friends: { disconnect: [{ uid: userUid }] } },
			});

			const user = await prisma.user.update({
				where: { uid: userUid },
				data: { friends: { disconnect: [{ uid: userInfo.userUid }] } },
			});

			return user;
		} catch (error) {
			await prisma.user.update({
				where: { uid: userInfo.userUid },
				data: { friends: { connect: [{ uid: userUid }] } },
			});

			await prisma.user.update({
				where: { uid: userUid },
				data: { friends: { connect: [{ uid: userInfo.userUid }] } },
			});

			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
