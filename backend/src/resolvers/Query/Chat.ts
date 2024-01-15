import { GraphQLError } from "graphql";
import { Context } from "../../models";
import { ChatRoom, Prisma } from "@prisma/client";

interface ChatsArgs {
	uid: string;
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
						every: {
							uid: uid,
						},
					},
				},
			});

			return chats;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
