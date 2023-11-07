import { graphql } from "@/graphql/generated";

export const deletePost = graphql(/* GraphQL */ `
	mutation deletePost($postId: ID!) {
		deletePost(postId: $postId) {
			id
		}
	}
`);
