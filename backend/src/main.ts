import { ApolloServer } from "apollo-server";
import { rootTypeDefs } from "./typeDefinitions/rootTypeDefs";
import { Query, Mutation } from "./resolvers";
import { PrismaClient } from "@prisma/client";
import { getUserFromToken } from "./utils";
import { Context } from "./models/global";

export const prisma = new PrismaClient();

const server = new ApolloServer({
	typeDefs: rootTypeDefs,
	resolvers: { Query, Mutation },
	context: async ({ req }: any): Promise<Context> => {
		const userInfo = await getUserFromToken(req.headers.authorization);

		return { prisma, userInfo };
	},
});

server.listen().then(({ url }) => {
	console.log(`Server ready on ${url}`);
});
