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
		{ prisma }: Context
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

			const result = { ...user, isFriends: false };

			return result;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	users: async (_: any, __: any, { prisma }: Context) => {
		const data = await prisma.user.findMany();

		return data;
	},
	following: async (
		_: any,
		{ uid, skip, take }: FriendsArgs,
		{ prisma }: Context
	) => {
		if (!uid) {
			throw new GraphQLError("you must provide a UID param");
		}
		if (!skip) {
			throw new GraphQLError("you must provide a Skip param");
		}
		if (!take) {
			throw new GraphQLError("you must provide a Take param");
		}

		const user = await prisma.user.findUnique({
			where: {
				uid: uid,
			},
			include: {
				following: {
					select: {
						uid: true,
						firstName: true,
						lastName: true,
					},
					skip,
					take,
				},
			},
		});

		if (!user) {
			throw new GraphQLError("User not found");
		}

		return user;
	},
	followedBy: async (
		_: any,
		{ uid, skip, take }: FriendsArgs,
		{ prisma }: Context
	) => {
		if (!uid) {
			throw new GraphQLError("you must provide a UID param");
		}
		if (!skip) {
			throw new GraphQLError("you must provide a Skip param");
		}
		if (!take) {
			throw new GraphQLError("you must provide a Take param");
		}

		const user = await prisma.user.findUnique({
			where: {
				uid: uid,
			},
			include: {
				followedBy: {
					select: {
						uid: true,
						firstName: true,
						lastName: true,
					},
					skip,
					take,
				},
			},
		});

		if (!user) {
			throw new GraphQLError("User not found");
		}

		return user;
	},
	followedByRequest: async (
		_: any,
		{ uid, skip, take }: FriendsArgs,
		{ prisma }: Context
	) => {
		if (!uid) {
			throw new GraphQLError("you must provide a UID param");
		}
		if (!skip) {
			throw new GraphQLError("you must provide a Skip param");
		}
		if (!take) {
			throw new GraphQLError("you must provide a Take param");
		}

		const user = await prisma.user.findUnique({
			where: {
				uid: uid,
			},
			include: {
				followedByRequest: {
					select: {
						uid: true,
						firstName: true,
						lastName: true,
					},
					skip,
					take,
				},
			},
		});

		if (!user) {
			throw new GraphQLError("User not found");
		}

		return user;
	},
	followingRequest: async (
		_: any,
		{ uid, skip, take }: FriendsArgs,
		{ prisma }: Context
	) => {
		if (!uid) {
			throw new GraphQLError("you must provide a UID param");
		}
		if (!skip) {
			throw new GraphQLError("you must provide a Skip param");
		}
		if (!take) {
			throw new GraphQLError("you must provide a Take param");
		}

		const user = await prisma.user.findUnique({
			where: {
				uid: uid,
			},
			include: {
				followingRequest: {
					select: {
						uid: true,
						firstName: true,
						lastName: true,
					},
					skip,
					take,
				},
			},
		});

		if (!user) {
			throw new GraphQLError("User not found");
		}

		return user;
	},
};
