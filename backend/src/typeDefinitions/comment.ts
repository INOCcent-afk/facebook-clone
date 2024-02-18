import { gql } from "apollo-server-express";

export const commentTypeDef = gql`
	type Comment {
		id: ID!
		userUid: ID!
		user: User
		postId: ID!
		post: Post
		commentParentId: ID
		content: String
		createdAt: Date
		updatedAt: Date
		repliedCommentToId: Int
		repliedCommentTo: Comment
	}

	type Comments {
		comments: [Comment]
		totalCount: Int
	}

	type Mutation {
		createComment(postId: Int!, content: String!): Comment!
		updateComment(commentId: Int!, content: String!): Comment!
		deleteComment(commentId: Int!): Comment!
	}
`;
