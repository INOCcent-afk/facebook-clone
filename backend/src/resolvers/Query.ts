import { Context } from "../models";

export const Query = {
	users: async (_: any, __: any, { prisma }: Context) => {
		const data = await prisma.user.findMany();
		return data;
	},
};
