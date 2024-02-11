import { gql } from "apollo-server-express";
import { commentTypeDef } from "./comment";

export const postTypeDef = gql`
	type Post {
		id: ID!
		userUid: ID!
		user: User
		sharedPost: SharedPost
		image: String
		video: String
		images: [Post]
		videos: [Post]
		comments: [Comment]
		reactions: [Reaction]
		postContent: String
		createdAt: Date
		updatedAt: Date
	}

	type SharedPost {
		id: ID!
		userUid: ID!
		user: User
		images: [Post]
		videos: [Post]
		comments: [Comment]
		reactions: [Reaction]
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
