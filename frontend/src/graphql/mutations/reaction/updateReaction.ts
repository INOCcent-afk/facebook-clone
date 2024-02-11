import { graphql } from "@/graphql/generated";

export const updateReaction = graphql(/* GraphQL */ `
	mutation updateReaction($emoji: Emoji!, $postId: ID!) {
		updateReaction(emoji: $emoji, postId: $postId) {
			id
		}
	}
`);
