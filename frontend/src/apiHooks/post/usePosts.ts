import { graphQLClient } from "@/graphql/graphQLClient";
import { getPosts } from "@/graphql/queries/post/posts";
import { useQuery } from "@tanstack/react-query";

interface Props {
	token: string;
	enabled: boolean;
}

export const usePosts = ({ token, enabled = false }: Props) => {
	const query = useQuery(
		["posts"],
		async () => {
			const { posts } = await graphQLClient(token).request(getPosts);
			return posts;
		},
		{
			enabled,
		}
	);

	return { ...query };
};
