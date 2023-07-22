import { Context } from "@/models/global";
import { canUserMutatePost } from "@/utils";
import { Post, Prisma } from "@prisma/client";

interface PostArgs {
	post: {
		postContent?: string;
	};
}

interface PostPayloadType {
	userErrors: { message: string }[];
	post: null | Prisma.Prisma__PostClient<Post, never> | Post;
}

export const postResolvers = {
	postCreate: async (
		_: any,
		{ post }: PostArgs,
		{ prisma, userInfo }: Context
	): Promise<PostPayloadType> => {
		if (!userInfo) {
			return {
				userErrors: [
					{
						message: "Forbidden access (unauthenticated)",
					},
				],
				post: null,
			};
		}

		const { postContent } = post;

		if (!postContent) {
			return {
				userErrors: [
					{
						message:
							"you must provide a title and content to create a post",
					},
				],
				post: null,
			};
		}

		return {
			userErrors: [],
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
			return {
				userErrors: [
					{
						message: "Forbidden access (unauthenticated)",
					},
				],
				post: null,
			};
		}

		const error = await canUserMutatePost({
			userId: userInfo.userId,
			postId: Number(postId),
			prisma,
		});

		if (error) return error;

		const { postContent } = post;

		if (!postContent) {
			return {
				userErrors: [
					{
						message: "Need to have at least one field to update",
					},
				],
				post: null,
			};
		}

		const existingPost = await prisma.post.findUnique({
			where: {
				id: Number(postId),
			},
		});

		if (!existingPost) {
			return {
				userErrors: [
					{
						message: "Post does not exist",
					},
				],
				post: null,
			};
		}

		let payloadToUpdate: PostArgs["post"] = {
			postContent,
		};

		if (!postContent) delete payloadToUpdate.postContent;

		return {
			userErrors: [],
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
			return {
				userErrors: [
					{
						message: "Forbidden access (unauthenticated)",
					},
				],
				post: null,
			};
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
			return {
				userErrors: [
					{
						message: "Post does not exist",
					},
				],
				post: null,
			};
		}

		await prisma.post.delete({
			where: {
				id: Number(postId),
			},
		});

		return {
			userErrors: [],
			post,
		};
	},
};
