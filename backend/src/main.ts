import express from "express";
import { ApolloServer } from "apollo-server-express";
import { rootTypeDefs } from "./typeDefinitions/rootTypeDefs";
import { Query, Mutation } from "./resolvers";
import { PrismaClient } from "@prisma/client";
import { getUserFromToken } from "./utils";
import { Context } from "./models/global";
import { dateScalar } from "./scalars/date";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

require("dotenv").config();

export const prisma = new PrismaClient();

const server = new ApolloServer({
	typeDefs: rootTypeDefs,
	resolvers: {
		Query,
		Mutation,

		// **** Scalars ****
		Date: dateScalar,
	},
	context: async ({ req }: any): Promise<Context> => {
		const userInfo = await getUserFromToken(req.headers.authorization);

		return {
			prisma,
			userInfo: userInfo?.uid ? { userUid: userInfo?.uid } : null,
		};
	},
});

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.use(cors());

server.start().then(() => {
	server.applyMiddleware({ app });

	httpServer.listen(4000, () => {
		console.log(
			`🚀 Server ready at http://localhost:4000${server.graphqlPath}`
		);
	});

	io.on("connection", (socket) => {
		console.log("A user connected");
		socket.on("disconnect", () => {
			console.log("User disconnected");
		});
	});
});
