import { graphql } from "@/graphql/generated";

export const deleteReaction = graphql(/* GraphQL */ `
	mutation deleteReaction($postId: ID!) {
		deleteReaction(postId: $postId) {
			id
		}
	}
`);
