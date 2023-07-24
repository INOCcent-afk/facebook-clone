import { Context } from "../models";

interface Props {
	userId: number;
	postId: number;
	prisma: Context["prisma"];
}
export const canUserMutatePost = async ({
	userId,
	postId,
	prisma,
}: Props): Promise<any> => {
	const user = await prisma.user.findUnique({
		where: {
			id: userId,
		},
	});

	if (!user) {
		return {
			userErrors: [
				{
					message: "User not found",
				},
			],
			post: null,
		};
	}

	const post = await prisma.post.findUnique({
		where: {
			id: postId,
		},
	});

	if (post?.userId !== user.id) {
		return {
			userErrors: [
				{
					message: "Post not owned by user",
				},
			],
			post: null,
		};
	}
};
