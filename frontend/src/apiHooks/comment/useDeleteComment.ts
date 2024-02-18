import { graphQLClient } from "@/graphql/graphQLClient";
import { useMutation } from "@tanstack/react-query";
import { deleteComment as deleteCommentQL } from "@/graphql/mutations/comment/deleteComment";

interface Props {
	commentId: number;
	token: string;
}

const updateComment = async ({ token, commentId }: Props) => {
	const data = await graphQLClient(token).request(deleteCommentQL, {
		commentId: commentId,
	});

	return data;
};

export const useUpdatePost = () => {
	const mutation = useMutation(updateComment);

	return mutation;
};
