import { GraphQLError } from "graphql";
import { Context } from "../../models";
import { Post, Prisma } from "@prisma/client";

type PostsPayloadType =
	| null
	| Prisma.Prisma__PostClient<Post[], never>
	| Post[];

interface userPosts {
	id: number;
}

export const postResolvers = {
	// User Feed
	posts: async (
		_: any,
		__: any,
		{ prisma, userInfo }: Context
	): Promise<PostsPayloadType> => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		try {
			const posts = await prisma.post.findMany({
				orderBy: [
					{
						createdAt: "desc",
					},
				],
				include: {
					user: true,
					sharedPost: {
						include: {
							videos: true,
							user: true,
							images: true,
							comments: true,
							reactions: true,
						},
					},
				},
			});

			return posts;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	// User Profile Posts
	userPosts: async (
		_: any,
		{ id }: userPosts,
		{ prisma }: Context
	): Promise<PostsPayloadType> => {
		if (!id) {
			throw new GraphQLError("You must provide a ID param");
		}

		try {
			const posts = await prisma.post.findMany({
				orderBy: [
					{
						createdAt: "desc",
					},
				],
				where: {
					userId: id,
				},
				include: {
					user: true,
				},
			});

			return posts;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
