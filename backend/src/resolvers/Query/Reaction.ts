import { GraphQLError } from "graphql";
import { Context } from "../../models";

interface ReactionsArgs {
	postId: number;
}

export const reactionResolvers = {
	reactions: async (
		_: any,
		{ postId }: ReactionsArgs,
		{ prisma, userInfo }: Context
	) => {
		if (!postId) {
			throw new GraphQLError("You must provide a postId param");
		}

		try {
			const reactionCount = await prisma.reaction.count({
				where: {
					postId: Number(postId),
				},
			});

			const selectedEmoji = await prisma.reaction.findFirst({
				where: {
					AND: [
						{
							userUid: userInfo?.userUid,
						},
						{
							postId: Number(postId),
						},
					],
				},
			});

			return { reactionCount, selectedEmoji: selectedEmoji?.emoji };
		} catch (error) {
			console.log(error);
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
