import { graphql } from "@/graphql/generated";

export const getReactions = graphql(/* GraphQL */ `
	query getReactions($postId: ID!) {
		reactions(postId: $postId) {
			reactionCount
			selectedEmoji
		}
	}
`);
