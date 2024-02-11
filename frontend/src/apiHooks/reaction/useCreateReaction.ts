import { Emoji } from "@/graphql/generated/graphql";
import { graphQLClient } from "@/graphql/graphQLClient";
import { createReaction as createReactionQL } from "@/graphql/mutations/reaction/createReaction";
import { useMutation } from "@tanstack/react-query";

interface Props {
	postId: string;
	emoji: Emoji;
	token: string;
}

const createReaction = async ({ token, emoji, postId }: Props) => {
	const data = await graphQLClient(token).request(createReactionQL, {
		emoji,
		postId,
	});
	return data;
};

export const useCreateReaction = () => {
	const mutation = useMutation(createReaction);

	return mutation;
};
