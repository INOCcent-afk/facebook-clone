import { Post } from "@/graphql/generated/graphql";
import { graphQLClient } from "@/graphql/graphQLClient";
import { updatePost as updatePostQL } from "@/graphql/mutations/post/updatePost";
import { useMutation } from "@tanstack/react-query";

interface Props {
	post: Pick<Post, "images" | "postContent" | "videos" | "id">;
	token: string;
}

const updatePost = async ({ token, post }: Props) => {
	const data = await graphQLClient(token).request(updatePostQL, {
		postId: post.id,
		post: {
			postContent: post.postContent,
			images: post.images,
			videos: post.videos,
		},
	});
	return data;
};

export const useUpdatePost = () => {
	const mutation = useMutation(updatePost);

	return mutation;
};
