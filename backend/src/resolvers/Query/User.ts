import { Context } from "../../models";

export const userResolvers = {
	users: async (_: any, __: any, { prisma }: Context) => {
		const data = await prisma.user.findMany();

		return data;
	},
};
