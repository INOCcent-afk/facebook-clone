import { graphQLClient } from "@/graphql/graphQLClient";
import { useMutation } from "@tanstack/react-query";
import { updateComment as updateCommentQL } from "@/graphql/mutations/comment/updateComment";

interface Props {
	content: string;
	commentId: number;
	token: string;
}

const updateComment = async ({ token, commentId, content }: Props) => {
	const data = await graphQLClient(token).request(updateCommentQL, {
		content: content,
		commentId: commentId,
	});

	return data;
};

export const useUpdatePost = () => {
	const mutation = useMutation(updateComment);

	return mutation;
};
