import { gql } from "apollo-server";
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
	}

	type Mutation {
		createPost(post: PostInput!): Post!
		updatePost(postId: ID!, post: PostInput!): Post!
		deletePost(postId: ID!): Post
	}

	input PostInput {
		postContent: String
	}

	${commentTypeDef}
`;
