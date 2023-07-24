import { Post, Prisma } from "@prisma/client";
import { Context } from "../../models";

interface PostArgs {
	post: {
		postContent?: string;
	};
}

interface PostPayloadType {
	userErrors: { message: string }[];
	post: null | Prisma.Prisma__PostClient<Post, never> | Post;
}

export const userResolvers = {
	userCreate: async (
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
};
