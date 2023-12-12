import { gql } from "apollo-server-express";
import { commentTypeDef } from "./comment";

export const postTypeDef = gql`
	type Post {
		id: ID!
		userId: ID!
		user: User
		postParentId: ID
		images: [String]
		videos: [String]
		comments: [Comment]
		postContent: String
		createdAt: Date
		updatedAt: Date
	}

	type Mutation {
		createPost(post: PostInput!): Post!
		updatePost(postId: ID!, post: PostInput!): Post!
		deletePost(postId: ID!): Post
	}

	input PostInput {
		postContent: String
		images: [String]
		videos: [String]
	}

	${commentTypeDef}
`;
