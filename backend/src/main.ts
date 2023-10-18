import { ApolloServer } from "apollo-server";
import { rootTypeDefs } from "./typeDefinitions/rootTypeDefs";
import { Query, Mutation } from "./resolvers";
import { PrismaClient } from "@prisma/client";
import { getUserFromToken } from "./utils";
import { Context } from "./models/global";
require("dotenv").config();

export const prisma = new PrismaClient();

const server = new ApolloServer({
	typeDefs: rootTypeDefs,
	resolvers: { Query, Mutation },
	context: async ({ req }: any): Promise<Context> => {
		const userInfo = await getUserFromToken(req.headers.authorization);

		return {
			prisma,
			userInfo: userInfo?.uid ? { userUid: userInfo?.uid } : null,
		};
	},
	cors: {
		origin: [
			`${process.env.CLIENT_URL || "http://localhost:3000"}`,
			"https://studio.apollographql.com",
		],
		credentials: true,
	},
});

server.listen().then(({ url }) => {
	console.log(`Server ready on ${url}`);
});
