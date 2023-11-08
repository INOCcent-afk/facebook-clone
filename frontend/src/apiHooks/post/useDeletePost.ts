import { graphQLClient } from "@/graphql/graphQLClient";
import { deletePost as deletePostQL } from "@/graphql/mutations/post/deletePost";
import { useMutation } from "@tanstack/react-query";

interface Props {
	id: string;
	token: string;
}

const deletePost = async ({ token, id }: Props) => {
	const data = await graphQLClient(token).request(deletePostQL, {
		postId: id,
	});
	return data;
};

export const useDeletePost = () => {
	const mutation = useMutation(deletePost);

	return mutation;
};
