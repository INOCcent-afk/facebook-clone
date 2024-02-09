import { gql } from "apollo-server-express";
import { commentTypeDef } from "./comment";

export const postTypeDef = gql`
	type Post {
		id: ID!
		userId: ID!
		user: User
		sharedPost: SharedPost
		images: [String]
		videos: [String]
		comments: [Comment]
		postContent: String
		createdAt: Date
		updatedAt: Date
	}

	type SharedPost {
		id: ID
		userId: ID
		user: User
		images: [String]
		videos: [String]
		comments: [Comment]
		postContent: String
		createdAt: Date
		updatedAt: Date
	}

	input ImageInput {
		image: String!
	}

	type Mutation {
		createPost(post: PostInput!, images: [ImageInput]): Post!
		updatePost(postId: ID!, post: PostInput!): Post!
		deletePost(postId: ID!): Post
		sharePost(post: PostInput!, sharedPostId: Int!): Post!
	}

	input PostInput {
		postContent: String
	}

	${commentTypeDef}
`;
