import { GraphQLError } from "graphql";
import { Context } from "../../models";
import { Comment, Prisma } from "@prisma/client";

type ExtendedComment =
	| null
	| Prisma.Prisma__PostClient<Comment[], never>
	| Comment[];

type CommentsPayloadType = {
	totalCount: number;
	comments: Promise<ExtendedComment>;
};

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

			const totalCount = await prisma.comment.count({
				where: {
					postId: postId,
				},
			});

			return {
				comments: comments,
				totalCount: totalCount,
			};
		} catch (error) {
			console.log(error);
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
