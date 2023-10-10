import { Post, Prisma } from "@prisma/client";
import { Context } from "../../models";
import { canUserMutatePost, generateErrorMessage } from "../../utils";

interface PostArgs {
	post: {
		postContent?: string;
	};
}

interface PostPayloadType {
	error: string | null;
	post?: null | Prisma.Prisma__PostClient<Post, never> | Post;
}

export const postResolvers = {
	postCreate: async (
		_: any,
		{ post }: PostArgs,
		{ prisma, userInfo }: Context
	): Promise<PostPayloadType> => {
		if (!userInfo) {
			return generateErrorMessage("Forbidden access (unauthenticated)");
		}

		const { postContent } = post;

		if (!postContent) {
			return generateErrorMessage(
				"you must provide a title and content to create a post"
			);
		}

		return {
			error: null,
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
			return generateErrorMessage("Forbidden access (unauthenticated)");
		}

		const error = await canUserMutatePost({
			userId: userInfo.userId,
			postId: Number(postId),
			prisma,
		});

		if (error) return error;

		const { postContent } = post;

		if (!postContent) {
			return generateErrorMessage(
				"Need to have at least one field to update"
			);
		}

		const existingPost = await prisma.post.findUnique({
			where: {
				id: Number(postId),
			},
		});

		if (!existingPost) {
			return generateErrorMessage("Post does not exist");
		}

		let payloadToUpdate: PostArgs["post"] = {
			postContent,
		};

		if (!postContent) delete payloadToUpdate.postContent;

		return {
			error: null,
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
			return generateErrorMessage("Forbidden access (unauthenticated)");
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
			return generateErrorMessage("Post does not exist");
		}

		await prisma.post.delete({
			where: {
				id: Number(postId),
			},
		});

		return {
			error: null,
			post,
		};
	},
};
