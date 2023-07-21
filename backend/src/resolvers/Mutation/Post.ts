import { Context } from "@/models/global";
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
		{ prisma }: Context
	): Promise<PostPayloadType> => {
		const { postContent } = post;
		if (!postContent) {
			console.log(postContent);
			return {
				userErrors: [
					{
						message: "you must provide a title and content to create a post",
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
