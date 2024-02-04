import { GraphQLError } from "graphql";
import { Context } from "../../models";
import { Prisma, User } from "@prisma/client";

interface UserArgs {
	uid: string;
}

interface FriendsArgs {
	uid: string;
	skip: number;
	take: number;
}

type UserPayloadType = null | Prisma.Prisma__PostClient<User, never> | User;

export const userResolvers = {
	user: async (
		_: any,
		{ uid }: UserArgs,
		{ prisma, userInfo }: Context
	): Promise<UserPayloadType> => {
		if (!uid) {
			throw new GraphQLError("you must provide a user id");
		}

		try {
			const user = await prisma.user.findUnique({
				where: {
					uid: uid,
				},
				include: {
					friendRequestsReceiver: true,
					friends: true,
					profile: true,
				},
			});

			if (!user) {
				throw new GraphQLError("User not found");
			}

			if (userInfo && userInfo.userUid) {
				const isFriendsCount = await prisma.user.count({
					where: {
						uid: userInfo?.userUid,
						friends: {
							some: {
								uid: uid,
							},
						},
					},
				});

				const friendRequestCount = await prisma.friendRequest.count({
					where: {
						senderUid: uid,
					},
				});

				const friendRequestByFriendCount =
					await prisma.friendRequest.count({
						where: {
							senderUid: userInfo?.userUid,
						},
					});

				const photos = await prisma.post.findMany({
					where: {
						userUid: uid,
						images: {
							some: {
								// Only post with images
							},
						},
					},
				});

				const isFriends = isFriendsCount > 0;
				const isInFriendRequests = friendRequestByFriendCount > 0;
				const isRequestingToBeFriend = friendRequestCount > 0;

				const result = {
					...user,
					friendsCount: user.friends.length,
					isFriends,
					isInFriendRequests,
					isRequestingToBeFriend,
					photos,
				};

				return result;
			}

			const result = { ...user, friendsCount: user.friends.length };

			return result;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	users: async (_: any, __: any, { prisma }: Context) => {
		const data = await prisma.user.findMany();

		return data;
	},
	friends: async (
		_: any,
		{ uid, skip, take }: FriendsArgs,
		{ prisma }: Context
	) => {
		try {
			const user = await prisma.user.findUnique({
				where: {
					uid,
				},
				include: {
					friends: {
						skip,
						take,
					},
				},
			});

			const friendsCount = await prisma.user.count({
				where: {
					friends: {
						some: {
							uid,
						},
					},
				},
			});

			return { ...user, friendsCount };
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
