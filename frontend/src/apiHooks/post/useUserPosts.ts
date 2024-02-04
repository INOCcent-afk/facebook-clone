import { graphQLClient } from "@/graphql/graphQLClient";
import { getUserPosts } from "@/graphql/queries/post/userPosts";
import { useQuery } from "@tanstack/react-query";

interface Props {
	enabled?: boolean;
	uid: string;
}

export const useUserPosts = ({ enabled = false, uid }: Props) => {
	const query = useQuery(
		["user-posts", uid],
		async () => {
			const { userPosts } = await graphQLClient().request(getUserPosts, {
				uid,
			});
			return userPosts;
		},
		{
			enabled,
		}
	);

	return { ...query };
};
