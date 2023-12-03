import { gql } from "apollo-server";
import { userTypeDef } from "./user";
import { profileTypeDef } from "./profile";
import { postTypeDef } from "./post";
import { friendshipTypeDef } from "./friendship";

export const rootTypeDefs = gql`
	scalar Date

	type Query {
		users: [User]
		user(uid: String!): User
		me: User
		friends(uid: String!, skip: Int!, take: Int!): User
		profiles: [Profile]
		posts: [Post]
		userPosts(id: Int): [Post]
		comments: [Comment]
	}

	${userTypeDef}
	${profileTypeDef}
	${postTypeDef}
	${friendshipTypeDef}
`;
