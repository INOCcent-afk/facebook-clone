import { gql } from "apollo-server";
import { userTypeDef } from "./user";
import { profileTypeDef } from "./profile";
import { postTypeDef } from "./post";

export const rootTypeDefs = gql`
	scalar Date

	type Query {
		users: [User]
		user(uid: String!): User
		followedBy(uid: String, skip: Int, take: Int): User
		following(uid: String, skip: Int, take: Int): User
		followedByRequest(uid: String, skip: Int, take: Int): User
		followingRequest(uid: String, skip: Int, take: Int): User

		profiles: [Profile]
		posts: [Post]
		comments: [Comment]
		me: User
	}

	${userTypeDef}
	${profileTypeDef}
	${postTypeDef}
`;
