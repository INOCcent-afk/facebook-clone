import { graphQLClient } from "@/graphql/graphQLClient";
import { getReactions } from "@/graphql/queries/reaction/reactions";
import { useQuery } from "@tanstack/react-query";

interface Props {
	token: string;
	postId: string;
	enabled?: boolean;
}

export const useReactions = ({ token, postId, enabled = false }: Props) => {
	const query = useQuery(
		["reactions", postId],
		async () => {
			const { reactions } = await graphQLClient(token).request(
				getReactions,
				{
					postId: postId,
				}
			);

			return reactions;
		},
		{
			enabled,
		}
	);

	return { ...query };
};
