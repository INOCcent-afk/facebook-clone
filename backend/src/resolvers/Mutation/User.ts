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

			if (existingRequest) {
				throw new GraphQLError("Friend request already sent.");
			}

			const friendRequest = await prisma.friendRequest.create({
				data: {
					sender: { connect: { uid: userInfo.userUid } },
					receiver: { connect: { uid: receiverUid } },
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

			return user;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	// cancelFriendRequest: async (
	// 	_: any,
	// 	{ userUid }: FriendShipProps,
	// 	{ prisma, userInfo }: Context
	// ) => {
	// 	if (!userInfo || (userInfo && !userInfo.userUid)) {
	// 		throw new GraphQLError("Forbidden access  (unauthenticated)");
	// 	}

	// 	try {
	// 		await prisma.user.update({
	// 			where: { uid: userInfo.userUid },
	// 			data: { friendRequests: { connect: [{ uid: userUid }] } },
	// 		});

	// 		const user = await prisma.user.update({
	// 			where: { uid: userUid },
	// 			data: {
	// 				friendRequests: { connect: [{ uid: userInfo.userUid }] },
	// 			},
	// 		});

	// 		return user;
	// 	} catch (error) {
	// 		throw new GraphQLError(JSON.stringify(error));
	// 	}
	// },
	// rejectFriendRequest: async (
	// 	_: any,
	// 	{ userUid }: FriendShipProps,
	// 	{ prisma, userInfo }: Context
	// ) => {
	// 	if (!userInfo || (userInfo && !userInfo.userUid)) {
	// 		throw new GraphQLError("Forbidden access  (unauthenticated)");
	// 	}

	// 	try {
	// 		await prisma.user.update({
	// 			where: { uid: userInfo.userUid },
	// 			data: { friendRequests: { connect: [{ uid: userUid }] } },
	// 		});

	// 		const user = await prisma.user.update({
	// 			where: { uid: userUid },
	// 			data: {
	// 				friendRequests: { connect: [{ uid: userInfo.userUid }] },
	// 			},
	// 		});

	// 		return user;
	// 	} catch (error) {
	// 		throw new GraphQLError(JSON.stringify(error));
	// 	}
	// },
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
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
