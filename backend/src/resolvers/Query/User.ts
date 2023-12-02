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
			});

			if (!user) {
				throw new GraphQLError("User not found");
			}

			if (!userInfo || (userInfo && !userInfo.userUid)) {
				const friendCount = await prisma.user.count({
					where: {
						uid: userInfo?.userUid,
						friends: {
							some: {
								uid: uid,
							},
						},
					},
				});

				const friendRequestCount = await prisma.user.count({
					where: {
						uid: userInfo?.userUid,
						friendRequests: {
							some: {
								uid: uid,
							},
						},
					},
				});
				const isFriends = friendCount > 0;
				const isInFriendRequests = friendRequestCount > 0;

				const result = { ...user, isFriends, isInFriendRequests };

				return result;
			}

			const result = { ...user };

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
