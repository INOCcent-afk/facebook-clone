import { graphQLClient } from "@/graphql/graphQLClient";
import { deleteReaction as deleteReactionQl } from "@/graphql/mutations/reaction/deleteReaction";
import { useMutation } from "@tanstack/react-query";

interface Props {
	postId: string;
	token: string;
}

const deleteReaction = async ({ token, postId }: Props) => {
	const data = await graphQLClient(token).request(deleteReactionQl, {
		postId,
	});
	return data;
};

export const useDeleteReaction = () => {
	const mutation = useMutation(deleteReaction);

	return mutation;
};
