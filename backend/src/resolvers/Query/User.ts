import { GraphQLError } from "graphql";
import { Context, Error } from "../../models";
import { Prisma, User } from "@prisma/client";

interface UserArgs {
	uid: string;
}

interface UserPayloadType {
	error: Error;
	user?: null | Prisma.Prisma__PostClient<User, never> | User;
}

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
			const data = await prisma.user.findUnique({
				where: {
					uid: uid,
				},
			});

			if (!data) {
				throw new GraphQLError("User not found");
			}

			return {
				error: [],
				user: data,
			};
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	users: async (_: any, __: any, { prisma }: Context) => {
		const data = await prisma.user.findMany();

		return data;
	},
};
