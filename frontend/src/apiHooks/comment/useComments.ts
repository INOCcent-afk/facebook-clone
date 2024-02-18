import { graphQLClient } from "@/graphql/graphQLClient";
import { getComments as getCommentsQL } from "@/graphql/queries/comment/getComments";
import { useQuery } from "@tanstack/react-query";

interface Props {
	token: string;
	enabled: boolean;
	postId: number;
}

export const useComments = ({ token, postId, enabled = false }: Props) => {
	const query = useQuery(
		["comments", postId],
		async () => {
			const { comments } = await graphQLClient(token).request(
				getCommentsQL,
				{
					postId: postId,
				}
			);
			return comments;
		},
		{
			enabled,
		}
	);

	return { ...query };
};
