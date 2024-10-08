import { graphQLClient } from "@/graphql/graphQLClient";
import { createPost as createPostQL } from "@/graphql/mutations/post/createPost";
import { useMutation } from "@tanstack/react-query";

interface Props {
	postContent: string;
	images?: { image: string }[];
	token: string;
}

const createPost = async ({ token, postContent, images }: Props) => {
	const data = await graphQLClient(token).request(createPostQL, {
		post: {
			postContent,
		},
		images: images,
	});
	return data;
};

export const useCreatePost = () => {
	const mutation = useMutation(createPost);

	return mutation;
};
