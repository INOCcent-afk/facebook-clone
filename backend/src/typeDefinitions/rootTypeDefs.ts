import { gql } from "apollo-server";
import { userTypeDef } from "./user";
import { profileTypeDef } from "./profile";
import { postTypeDef } from "./post";

export const rootTypeDefs = gql`
	type Query {
		users: [User]
		user(uid: String!): User
		profiles: [Profile]
		posts: [Post]
		comments: [Comment]
		me: User
	}

	${userTypeDef}
	${profileTypeDef}
	${postTypeDef}
`;
