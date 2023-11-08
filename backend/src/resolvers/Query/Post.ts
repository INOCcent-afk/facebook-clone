import { GraphQLError } from "graphql";
import { Context } from "../../models";
import { Post, Prisma } from "@prisma/client";

type PostsPayloadType =
	| null
	| Prisma.Prisma__PostClient<Post[], never>
	| Post[];

export const postResolvers = {
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
