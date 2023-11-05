import { graphQLClient } from "@/graphql/graphQLClient";
import { createPost as createPostQL } from "@/graphql/mutations/posts/createPost";
import { useMutation } from "@tanstack/react-query";

interface Props {
	postContent: string;
	token: string;
}

const createPost = async ({ token, postContent }: Props) => {
	const data = await graphQLClient(token).request(createPostQL, {
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
