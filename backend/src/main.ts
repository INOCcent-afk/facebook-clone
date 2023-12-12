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
const io = new Server(httpServer, {
	cors: {
		origin: [
			`${process.env.CLIENT_URL || "http://localhost:3000"}`,
			"https://studio.apollographql.com",
		],
		credentials: true,
	},
});

server.start().then(() => {
	server.applyMiddleware({
		app,
		cors: {
			origin: [
				`${process.env.CLIENT_URL || "http://localhost:3000"}`,
				"https://studio.apollographql.com",
			],
			credentials: true,
		},
	});

	httpServer.listen(4000, () => {
		console.log(
			`🚀 Server ready at http://localhost:4000${server.graphqlPath}`
		);
	});

	io.on("connection", (socket) => {
		console.log("Connected");

		socket.on("ping", (data) => {
			console.log(data);
			socket.emit("pong", "POTANGINA MO JEPOY DIZON");
		});

		socket.on("disconnect", () => {
			console.log("User disconnected");
		});
	});
});
