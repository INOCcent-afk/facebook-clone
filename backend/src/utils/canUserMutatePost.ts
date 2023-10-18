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
		return {
			errors: [
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
			errors: [
				{
					message: "Post not owned by user",
				},
			],
			post: null,
		};
	}
};
