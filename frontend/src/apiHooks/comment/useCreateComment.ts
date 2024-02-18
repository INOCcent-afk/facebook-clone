import { graphQLClient } from "@/graphql/graphQLClient";
import { useMutation } from "@tanstack/react-query";
import { createComment as createCommentQL } from "@/graphql/mutations/comment/createComment";

interface Props {
	content: string;
	postId: number;
	token: string;
}

const createComment = async ({ token, postId, content }: Props) => {
	const data = await graphQLClient(token).request(createCommentQL, {
		content: content,
		postId: postId,
	});

	return data;
};

export const useCreateComment = () => {
	const mutation = useMutation(createComment);

	return mutation;
};
