import { graphQLClient } from "@/graphql/graphQLClient";
import { createPost as createPostQL } from "@/graphql/mutations/posts/createPost";
import { useMutation } from "@tanstack/react-query";

const createPost = async (postContent: string) => {
	const data = await graphQLClient().request(createPostQL, {
		post: {
			postContent,
		},
	});
	return data;
};

export const useCreatePost = () => {
	const mutation = useMutation(createPost);

	return mutation;
};
