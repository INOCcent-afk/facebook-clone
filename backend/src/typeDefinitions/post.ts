import { gql } from "apollo-server";
import { commentTypeDef } from "./comment";

export const postTypeDef = gql`
	type Post {
		id: ID!
		userId: ID!
		postParentId: ID!
		images: [String]
		videos: [String]
		comments: [Comment]
		postContent: String
	}

	type Mutation {
		postCreate(post: PostInput!): Post!
		postUpdate(postId: ID!, post: PostInput!): Post!
		postDelete(postId: ID!): Post
	}

	input PostInput {
		postContent: String
	}

	${commentTypeDef}
`;
