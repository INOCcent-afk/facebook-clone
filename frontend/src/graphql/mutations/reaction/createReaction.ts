import { graphql } from "@/graphql/generated";

export const createReaction = graphql(/* GraphQL */ `
	mutation createReaction($emoji: Emoji!, $postId: ID!) {
		createReaction(emoji: $emoji, postId: $postId) {
			id
		}
	}
`);
