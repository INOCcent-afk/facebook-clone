import { Prisma, PrismaClient } from "@prisma/client";

export type Me = {
	userId: number;
} | null;

export type Error = string | null;

export interface Context {
	prisma: PrismaClient<
		Prisma.PrismaClientOptions,
		never,
		Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
	>;
	userInfo: Me;
}
