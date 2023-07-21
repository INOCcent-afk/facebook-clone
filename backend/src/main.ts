import { ApolloServer } from "apollo-server";
import { rootTypeDefs } from "./typeDefinitions/rootTypeDefs";
import { Query, Mutation } from "./resolvers";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const server = new ApolloServer({
	typeDefs: rootTypeDefs,
	resolvers: { Query, Mutation },
	context: async () => {
		return { prisma };
	},
});

server.listen().then(({ url }) => {
	console.log(`Server ready on ${url}`);
});
