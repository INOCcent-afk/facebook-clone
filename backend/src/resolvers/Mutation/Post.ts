import { Post, Prisma } from "@prisma/client";
import { Context } from "../../models";
import { canUserMutatePost } from "../../utils";
import { GraphQLError } from "graphql";

interface PostArgs {
	post: {
		postContent?: string;
	};
}

interface PostShareArgs {
	post: {
		postContent?: string;
	};
	postParentId: number;
}

type PostPayloadType = null | Prisma.Prisma__PostClient<Post, never> | Post;

export const postResolvers = {
	createPost: async (
		_: any,
		{ post }: PostArgs,
		{ prisma, userInfo }: Context
	): Promise<PostPayloadType> => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		const { postContent } = post;

		if (!postContent) {
			throw new GraphQLError(
				"you must provide a title and content to create a post"
			);
		}

		try {
			return prisma.post.create({
				data: {
					user: {
						connect: {
							uid: userInfo.userUid,
						},
					},
					postContent,
				},
			});
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	updatePost: async (
		_: any,
		{ post, postId }: { postId: string; post: PostArgs["post"] },
		{ prisma, userInfo }: Context
	): Promise<PostPayloadType> => {
		if (!userInfo) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		await canUserMutatePost({
			userUid: userInfo?.userUid,
			postId: Number(postId),
			prisma,
		});

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

		try {
			return prisma.post.update({
				data: {
					...payloadToUpdate,
				},
				where: {
					id: Number(postId),
				},
			});
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	deletePost: async (
		_: any,
		{ postId }: { postId: string },
		{ prisma, userInfo }: Context
	): Promise<PostPayloadType> => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		await canUserMutatePost({
			userUid: userInfo.userUid,
			postId: Number(postId),
			prisma,
		});

		const post = await prisma.post.findUnique({
			where: {
				id: Number(postId),
			},
		});

		if (!post) {
			throw new GraphQLError("Post does not exist");
		}

		try {
			return await prisma.post.delete({
				where: {
					id: Number(postId),
				},
			});
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	sharePost: async (
		_: any,
		{ post, postParentId }: PostShareArgs,
		{ prisma, userInfo }: Context
	): Promise<PostPayloadType> => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		const { postContent } = post;

		if (!postContent && !postParentId) {
			throw new GraphQLError(
				"you must provide a postParentId or content to create a post"
			);
		}

		try {
			return prisma.post.create({
				data: {
					user: {
						connect: {
							uid: userInfo.userUid,
						},
					},
					parentPost: {
						connect: {
							parentId: postParentId,
						},
					},
					postContent,
				},
			});
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
