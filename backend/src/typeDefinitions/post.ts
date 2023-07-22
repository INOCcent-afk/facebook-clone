import { gql } from "apollo-server";
import { commentTypeDef } from "./comment";

export const postTypeDef = gql`
	type Post {
		id: ID!
		userId: ID!
		postParentId: ID!
		images: [String]
		videos: [String]
		comments: [Comment!]!
		postContent: String
	}

	type Mutation {
		postCreate(post: PostInput!): PostPayload!
		postUpdate(postId: ID!, post: PostInput!): PostPayload!
		postDelete(postId: ID!): PostPayload
	}

	input PostInput {
		postContent: String
	}

	type PostPayload {
		userErrors: [UserError!]!
		post: Post
	}

	type UserError {
		message: String!
	}

	${commentTypeDef}
`;
