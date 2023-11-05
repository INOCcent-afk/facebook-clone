import { GraphQLError } from "graphql";
import { Context, Error } from "../../models";
import { Prisma, User } from "@prisma/client";

interface UserArgs {
	uid: string;
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

			return user;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	users: async (_: any, __: any, { prisma }: Context) => {
		const data = await prisma.user.findMany();

		return data;
	},
};
