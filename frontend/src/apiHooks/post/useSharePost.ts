import { graphQLClient } from "@/graphql/graphQLClient";
import { sharePost as sharePostQL } from "@/graphql/mutations/post/sharePost";
import { useMutation } from "@tanstack/react-query";

interface Props {
	postContent: string;
	sharedPostId: number;
	token: string;
}

const sharePost = async ({ token, postContent, sharedPostId }: Props) => {
	const data = await graphQLClient(token).request(sharePostQL, {
		post: {
			postContent,
		},
		sharedPostId,
	});
	return data;
};

export const useSharePost = () => {
	const mutation = useMutation(sharePost);

	return mutation;
};
