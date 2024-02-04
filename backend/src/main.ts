import express from "express";
import { ApolloServer } from "apollo-server-express";
import { rootTypeDefs } from "./typeDefinitions/rootTypeDefs";
import { Query, Mutation } from "./resolvers";
import { PrismaClient, User } from "@prisma/client";
import { getUserFromToken } from "./utils";
import { Context, Me } from "./models/global";
import { dateScalar } from "./scalars/date";
import http from "http";
import { Server, Socket } from "socket.io";
import AWS from "aws-sdk";

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
		const s3 = new AWS.S3();

		return {
			prisma,
			userInfo: userInfo?.uid ? { userUid: userInfo?.uid } : null,
			s3,
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
		socket.on("loadNotifications", async ({ uid }: { uid: string }) => {
			try {
				const notifications = await prisma.notification.findMany({
					where: {
						createdFor: uid,
					},
					orderBy: {
						createdAt: "desc",
					},
				});

				socket.emit(`${uid}_loadNotifications`, {
					notifications,
				});
			} catch (error) {
				socket.emit("notificationsError", {
					message: "Error fetching notifications",
				});

				console.log(error);
			}
		});

		socket.on("viewNotifications", async ({ uid }: { uid: string }) => {
			try {
				const updatedNotifications =
					await prisma.notification.updateMany({
						data: {
							viewed: true,
						},
						where: {
							createdFor: uid,
							AND: {
								viewed: false,
							},
						},
					});

				if (updatedNotifications.count) {
					const notifications = await prisma.notification.findMany({
						where: {
							createdFor: uid,
						},
						orderBy: {
							createdAt: "desc",
						},
					});

					socket.emit(`${uid}_viewNotifications`, {
						notifications,
					});
				}
			} catch (error) {
				socket.emit("viewNotificationsError", {
					message: "Error viewing notifications",
				});

				console.log(error);
			}
		});

		socket.on(
			"sendNotification",
			async ({
				notificationUrl,
				notificationMessage,
				senderUid,
				createdFor,
			}: {
				notificationUrl: string;
				notificationMessage: string;
				senderUid: string;
				createdFor: string;
			}) => {
				if (!notificationMessage || !notificationUrl) {
					socket.emit("sendNotificationError", {
						message: "Error sending message",
					});
				}

				try {
					const notification = await prisma.notification.create({
						data: {
							createdFor: createdFor,
							notificationMessage: notificationMessage,
							notificationUrl: notificationUrl,
							user: {
								connect: {
									uid: senderUid,
								},
							},
						},
						include: {
							user: true,
						},
					});

					io.emit(`${createdFor}_notify`, {
						notification,
					});
				} catch (error) {
					socket.emit("sendNotificationError", {
						message: "Error sending notification",
					});

					console.log(error);
				}
			}
		);

		socket.on("viewChats", async ({ uid }: { uid: string }) => {
			try {
				const updateViewedChats =
					await prisma.viewedChatRoom.deleteMany({
						where: {
							AND: {
								userUid: uid,
							},
						},
					});

				if (updateViewedChats.count) {
					const chats = await prisma.chatRoom.findMany({
						where: {
							viewers: {
								every: {
									OR: [
										{
											userUid: uid,
										},
									],
								},
							},
						},
						include: {
							viewers: true,
						},
					});

					console.log(chats);

					socket.emit(`${uid}_viewChats`, {
						chats,
					});
				}
			} catch (error) {
				socket.emit("viewChatsError", {
					message: "Error viewing chats",
				});

				console.log(error);
			}
		});

		socket.on("loadChats", async ({ uid }: { uid: string }) => {
			try {
				const chats = await prisma.chatRoom.findMany({
					where: {
						users: {
							some: {
								uid: uid,
							},
						},
						messages: {
							some: {
								// Only chat room with messages
							},
						},
					},
					include: {
						users: true,
						messages: true,
						viewers: true,
					},
				});

				socket.emit("loadChats", {
					chats,
				});
			} catch (error) {
				socket.emit("loadChatsError", {
					message: "Error sending message",
				});

				console.log(error);
			}
		});

		socket.on(
			"joinPrivateRoom",
			async (
				senderUid: string,
				receieverUid: string,
				roomId?: number
			) => {
				try {
					const loadRoom = async (
						roomId: number,
						users: { uid: string }[]
					) => {
						const uidsToCheck = [senderUid, receieverUid];
						const allowedUsers = uidsToCheck.every((uidToCheck) =>
							users.some((user) => user.uid === uidToCheck)
						);
						if (allowedUsers) {
							socket.join(String(roomId));
						} else {
							io.to(socket.id).emit("accessDenied");
						}
					};

					if (roomId) {
						const existingRoom = await prisma.chatRoom.findUnique({
							where: { id: Number(roomId) },
							include: {
								users: {
									select: {
										uid: true,
									},
								},
								messages: true,
							},
						});

						if (!existingRoom) {
							const newChatRoom = await prisma.chatRoom.create({
								data: {
									users: {
										connect: [
											{
												uid: senderUid,
											},
											{
												uid: receieverUid,
											},
										],
									},
									viewers: {
										createMany: {
											data: [
												{
													userUid: senderUid,
												},
												{
													userUid: receieverUid,
												},
											],
										},
									},
								},
								include: {
									users: true,
									messages: true,
								},
							});

							loadRoom(newChatRoom.id, newChatRoom.users);
							return;
						}

						loadRoom(existingRoom.id, existingRoom.users);
					} else {
						const newChatRoom = await prisma.chatRoom.create({
							data: {
								users: {
									connect: [
										{
											uid: senderUid,
										},
										{
											uid: receieverUid,
										},
									],
								},
								viewers: {
									createMany: {
										data: [
											{
												userUid: senderUid,
											},
											{
												userUid: receieverUid,
											},
										],
									},
								},
							},
							include: {
								users: {
									select: {
										uid: true,
									},
								},
								messages: true,
							},
						});

						loadRoom(newChatRoom.id, newChatRoom.users);
					}

					console.log("We joined!");
				} catch (error) {
					socket.emit("joinError", {
						message: JSON.stringify(error),
					});
				}
			}
		);

		socket.on(
			"privateMessage",
			async ({ roomId, senderUid, receiverUid, message }) => {
				try {
					const sendMessage = async (
						roomId: number,
						users: User[]
					) => {
						const uidsToCheck = [senderUid, receiverUid];
						const allowedUsers = uidsToCheck.every((uidToCheck) =>
							users.some((user) => user.uid === uidToCheck)
						);

						if (allowedUsers) {
							io.to(String(roomId)).emit("privateMessage", {
								userUid: socket.userInfo?.userUid,
								message,
								roomId: roomId,
							});

							await prisma.message.create({
								data: {
									content: message,
									chatRoomId: roomId,
									userUid: senderUid,
								},
							});

							const viewedChatRoom =
								await prisma.viewedChatRoom.findUnique({
									where: {
										userUid_chatRoomId: {
											chatRoomId: roomId,
											userUid: receiverUid,
										},
									},
								});

							if (!viewedChatRoom) {
								await prisma.viewedChatRoom.create({
									data: {
										userUid: receiverUid,
										chatRoomId: roomId,
									},
								});
							}

							const chats = await prisma.chatRoom.findMany({
								where: {
									users: {
										some: {
											uid: senderUid,
										},
									},
									messages: {
										some: {
											// Only chat room with messages
										},
									},
								},
								include: {
									users: true,
									messages: true,
									viewers: true,
								},
							});

							io.emit("loadChats", {
								chats,
							});
						} else {
							io.to(socket.id).emit("accessDenied");
							console.log("accessDenied");
						}
					};

					if (roomId) {
						const roomExists = await prisma.chatRoom.findUnique({
							where: { id: Number(roomId) },
							include: {
								users: true,
							},
						});

						if (roomExists) {
							await sendMessage(roomExists.id, roomExists.users);
						}
					}
				} catch (error) {
					socket.emit("sendMessageError", {
						message: "Error sending message",
					});

					console.log(error);
				}
			}
		);

		socket.on("disconnect", () => {
			console.log("User disconnected");
		});
	});
});
