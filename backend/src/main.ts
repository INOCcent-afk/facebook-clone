import express from "express";
import { ApolloServer } from "apollo-server-express";
import { rootTypeDefs } from "./typeDefinitions/rootTypeDefs";
import { Query, Mutation } from "./resolvers";
import { PrismaClient } from "@prisma/client";
import { getUserFromToken } from "./utils";
import { Context, Me } from "./models/global";
import { dateScalar } from "./scalars/date";
import http from "http";
import { Server, Socket } from "socket.io";

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

interface ModifiedSocket extends Socket {
	userInfo?: Me;
}

io.use(async (socket: ModifiedSocket, next) => {
	const token = socket.handshake.auth.token;

	if (!token) {
		return next(new Error("Authentication error"));
	}

	const userInfo = await getUserFromToken(`Bearer ${token}`);

	socket.userInfo = userInfo?.uid ? { userUid: userInfo?.uid } : null;
	next();
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

	io.on("connection", (socket: ModifiedSocket) => {
		console.log(socket.userInfo);

		socket.on("joinPrivateRoom", (roomId: string) => {
			if (roomId.includes(socket.userInfo?.userUid as string)) {
				socket.join(roomId);
				console.log("We joined!");
			} else {
				socket.emit("joinError", {
					message: " You are not allowed to join this room",
				});
			}
		});

		socket.on("privateMessage", ({ roomId, message }) => {
			if (roomId.includes(socket.userInfo?.userUid as string)) {
				io.to(roomId).emit("privateMessage", {
					userUid: socket.userInfo?.userUid,
					message,
				});
			} else {
				socket.emit("joinError", {
					message: "You are not allowed to join this room",
				});
			}
		});

		socket.on("disconnect", () => {
			console.log("User disconnected");
		});
	});
});
