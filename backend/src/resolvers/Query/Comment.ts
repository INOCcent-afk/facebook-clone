import { GraphQLError } from "graphql";
import { Context } from "../../models";
import { Comment,  Prisma } from "@prisma/client";

type CommentsPayloadType =
	| null
	| Prisma.Prisma__PostClient<Comment[], never>
	| Comment[];

interface CommentsArgs {
	postId: number;
}

export const commentResolvers = {
	comments: async (
		_: any,
		{ postId }: CommentsArgs,
		{ prisma }: Context
	): Promise<CommentsPayloadType> => {
		try {
			const comments = prisma.comment.findMany({
				where: {
					postId: postId,
				},
			});

			return comments;
		} catch (error) {
			console.log(error);
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
