import { GraphQLError } from "graphql";
import { Context } from "../../models";

interface ChatsArgs {
	uid: string;
}

interface ChatArgs {
	senderUid: string;
	receiverUid: string;
}

export const chatResolvers = {
	chats: async (
		_: any,
		{ uid }: ChatsArgs,
		{ prisma, userInfo }: Context
	) => {
		if (!uid) {
			throw new GraphQLError("you must provide a user id");
		}

		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

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

			return chats;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	chat: async (
		_: any,
		{ senderUid, receiverUid }: ChatArgs,
		{ prisma, userInfo }: Context
	) => {
		if (!senderUid || !receiverUid) {
			throw new GraphQLError(
				"you must provide a senderUid and receiverUid"
			);
		}

		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		try {
			const chat = await prisma.chatRoom.findFirst({
				where: {
					users: {
						some: {
							uid: {
								in: [senderUid, receiverUid],
							},
						},
					},
				},
				include: {
					users: true,
					messages: true,
				},
			});

			return chat;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
