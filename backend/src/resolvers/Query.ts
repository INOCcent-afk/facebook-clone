import { Context } from "@/models/global";

export const Query = {
	users: async (_: any, __: any, { prisma }: Context) => {
		const data = await prisma.user.findMany();
		return data;
	},
};
