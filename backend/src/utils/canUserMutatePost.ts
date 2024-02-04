import { GraphQLError } from "graphql";
import { Context } from "../models";

interface Props {
	userUid: string;
	postId: number;
	prisma: Context["prisma"];
}
export const canUserMutatePost = async ({
	userUid,
	postId,
	prisma,
}: Props): Promise<any> => {
	const user = await prisma.user.findUnique({
		where: {
			uid: userUid,
		},
	});

	if (!user) {
		throw new GraphQLError("User not found");
	}

	const post = await prisma.post.findUnique({
		where: {
			id: postId,
		},
	});

	if (post?.userUid !== user.uid) {
		throw new GraphQLError("Post not owned by user");
	}
};
