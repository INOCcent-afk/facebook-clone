import { Context } from "../../models";
import { GraphQLError } from "graphql";

export const chatResolvers = {
	updateChatViewed: async (
		_: any,
		{ roomId }: { roomId: number },
		{ prisma, userInfo }: Context
	) => {
		if (!userInfo) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		if (!roomId) {
			throw new GraphQLError("Provide roomId please");
		}

		try {
			const chat = await prisma.chatRoom.findUnique({
				where: {
					id: roomId,
				},
			});

			if (!chat) {
				throw new GraphQLError("Chat Room Not Found");
			}

			return await prisma.chatRoom.update({
				data: {
					viewed: [...chat.viewed, userInfo.userUid],
				},
				where: {
					id: roomId,
				},
			});
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	updateChatUnviewed: async (
		_: any,
		{ roomId }: { roomId: number },
		{ prisma, userInfo }: Context
	) => {
		if (!userInfo) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		if (!roomId) {
			throw new GraphQLError("Provide roomId please");
		}

		try {
			const chat = await prisma.chatRoom.findUnique({
				where: {
					id: roomId,
				},
			});

			if (!chat) {
				throw new GraphQLError("Chat Room Not Found");
			}

			const filteredChat = chat.viewed.filter(
				(uids) => uids !== userInfo.userUid
			);

			return await prisma.chatRoom.update({
				data: {
					viewed: filteredChat,
				},
				where: {
					id: roomId,
				},
			});
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
