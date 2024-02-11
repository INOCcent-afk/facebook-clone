import { Emoji } from "@/graphql/generated/graphql";
import { graphQLClient } from "@/graphql/graphQLClient";
import { updateReaction as updateReactionQL } from "@/graphql/mutations/reaction/updateReaction";
import { useMutation } from "@tanstack/react-query";

interface Props {
	postId: string;
	emoji: Emoji;
	token: string;
}

const updateReaction = async ({ token, emoji, postId }: Props) => {
	const data = await graphQLClient(token).request(updateReactionQL, {
		emoji,
		postId,
	});
	return data;
};

export const useUpdateReaction = () => {
	const mutation = useMutation(updateReaction);

	return mutation;
};
