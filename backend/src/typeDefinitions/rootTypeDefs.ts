import { gql } from "apollo-server";
import { userTypeDef } from "./user";
import { profileTypeDef } from "./profile";
import { postTypeDef } from "./post";

export const rootTypeDefs = gql`
	scalar Date

	type Query {
		users: [User]
		user(uid: String!): User
		me: User

		profiles: [Profile]
		followedBy(uid: String, skip: Int, take: Int): User
		following(uid: String, skip: Int, take: Int): User
		followedByRequest(uid: String, skip: Int, take: Int): User
		followingRequest(uid: String, skip: Int, take: Int): User

		posts: [Post]
		userPosts(id: Int): [Post]
		comments: [Comment]
	}

	${userTypeDef}
	${profileTypeDef}
	${postTypeDef}
`;
