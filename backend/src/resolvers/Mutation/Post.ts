import { Post, Prisma } from "@prisma/client";
import { Context, Error } from "../../models";
import { canUserMutatePost } from "../../utils";
import { GraphQLError } from "graphql";

interface PostArgs {
	post: {
		postContent?: string;
	};
}

interface PostPayloadType {
	error: Error;
	post?: null | Prisma.Prisma__PostClient<Post, never> | Post;
}

export const postResolvers = {
	postCreate: async (
		_: any,
		{ post }: PostArgs,
		{ prisma, userInfo }: Context
	): Promise<PostPayloadType> => {
		if (!userInfo) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		const { postContent } = post;

		if (!postContent) {
			throw new GraphQLError(
				"you must provide a title and content to create a post"
			);
		}

		return {
			error: [],
			post: prisma.post.create({
				data: {
					userId: 1,
					postContent,
				},
			}),
		};
	},
	postUpdate: async (
		_: any,
		{ post, postId }: { postId: string; post: PostArgs["post"] },
		{ prisma, userInfo }: Context
	): Promise<PostPayloadType> => {
		if (!userInfo) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		const error = await canUserMutatePost({
			userId: userInfo.userId,
			postId: Number(postId),
			prisma,
		});

		if (error) return error;

		const { postContent } = post;

		if (!postContent) {
			throw new GraphQLError("Need to have at least one field to update");
		}

		const existingPost = await prisma.post.findUnique({
			where: {
				id: Number(postId),
			},
		});

		if (!existingPost) {
			throw new GraphQLError("Post does not exist");
		}

		let payloadToUpdate: PostArgs["post"] = {
			postContent,
		};

		if (!postContent) delete payloadToUpdate.postContent;

		return {
			error: [],
			post: prisma.post.update({
				data: {
					...payloadToUpdate,
				},
				where: {
					id: Number(postId),
				},
			}),
		};
	},
	postDelete: async (
		_: any,
		{ postId }: { postId: string },
		{ prisma, userInfo }: Context
	): Promise<PostPayloadType> => {
		if (!userInfo) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		const error = await canUserMutatePost({
			userId: userInfo.userId,
			postId: Number(postId),
			prisma,
		});

		if (error) return error;

		const post = await prisma.post.findUnique({
			where: {
				id: Number(postId),
			},
		});

		if (!post) {
			throw new GraphQLError("Post does not exist");
		}

		await prisma.post.delete({
			where: {
				id: Number(postId),
			},
		});

		return {
			error: [],
			post,
		};
	},
};
