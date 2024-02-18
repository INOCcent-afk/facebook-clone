import { GraphQLError } from "graphql";
import { Context } from "../../models";
import { Comment, Prisma } from "@prisma/client";

type CreateCommentPayloadType =
	| null
	| Prisma.Prisma__PostClient<Comment, never>
	| Comment;

type UpdateCommentPayloadType =
	| null
	| Prisma.Prisma__PostClient<Comment, never>
	| Comment;

type DeleteCommentPayloadType =
	| null
	| Prisma.Prisma__PostClient<Comment, never>
	| Comment;

interface CreateCommentsArgs {
	postId: number;
	content: string;
}

interface UpdateCommentsArgs {
	commentId: number;
	content: string;
}

interface DeleteCommentsArgs {
	commentId: number;
}

export const commentResolvers = {
	createComment: async (
		_: any,
		{ postId, content }: CreateCommentsArgs,
		{ prisma, userInfo }: Context
	): Promise<CreateCommentPayloadType> => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		console.log(postId, content);

		if (!postId || !content) {
			throw new GraphQLError("Please provide postId and content");
		}

		try {
			const post = prisma.post.findUnique({
				where: {
					id: postId,
				},
			});

			if (!post) {
				throw new GraphQLError("Post Not Found");
			}

			const createdComment = prisma.comment.create({
				data: {
					content: content,
					postId: postId,
					userUid: userInfo.userUid,
				},
			});

			return createdComment;
		} catch (error) {
			console.log(error);
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	updateComment: async (
		_: any,
		{ commentId, content }: UpdateCommentsArgs,
		{ prisma, userInfo }: Context
	): Promise<UpdateCommentPayloadType> => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		if (!commentId || !content) {
			throw new GraphQLError("Please provide commentId and content");
		}

		try {
			const createdComment = prisma.comment.update({
				data: {
					content: content,
				},
				where: {
					id: commentId,
				},
			});

			return createdComment;
		} catch (error) {
			console.log(error);
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	deleteComment: async (
		_: any,
		{ commentId }: DeleteCommentsArgs,
		{ prisma, userInfo }: Context
	): Promise<DeleteCommentPayloadType> => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		if (!commentId) {
			throw new GraphQLError("Please provide commentId and content");
		}

		try {
			const createdComment = prisma.comment.delete({
				where: {
					id: commentId,
				},
			});

			return createdComment;
		} catch (error) {
			console.log(error);
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
