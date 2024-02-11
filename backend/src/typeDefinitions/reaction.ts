import { gql } from "apollo-server-express";

export const reactionTypeDef = gql`
	enum Emoji {
		LIKE
		HEART
		LAUGH
		SUPRISE
		CRY
		ANGRY
	}

	type Reaction {
		id: ID
		userUid: ID
		user: User
		postId: ID
		post: Post
		emoji: Emoji
	}

	type Reactions {
		reactionCount: Int
		selectedEmoji: Emoji
	}

	type Mutation {
		createReaction(emoji: Emoji!, postId: ID!): Reaction!
		deleteReaction(postId: ID!): Reaction!
		updateReaction(emoji: Emoji!, postId: ID!): Reaction!
	}
`;
