import { graphQLClient } from "@/graphql/graphQLClient";
import { getUserPosts } from "@/graphql/queries/post/userPosts";
import { useQuery } from "@tanstack/react-query";

interface Props {
	enabled?: boolean;
	id: number;
}

export const useUserPosts = ({ enabled = false, id }: Props) => {
	const query = useQuery(
		["user-posts", id],
		async () => {
			const { userPosts } = await graphQLClient().request(getUserPosts, {
				id,
			});
			return userPosts;
		},
		{
			enabled,
		}
	);

	return { ...query };
};
