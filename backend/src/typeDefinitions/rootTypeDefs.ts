import { gql } from "apollo-server";
import { userTypeDef } from "./user";
import { profileTypeDef } from "./profile";
import { postTypeDef } from "./post";

export const rootTypeDefs = gql`
	type Query {
		users: [User!]!
		profiles: [Profile!]!
		posts: [Post!]!
		comments: [Comment!]!
		me: User
	}

	type UsersPayload {
		users: [User!]!
		error: [Error!]!
	}

	type MePayload {
		user: User
		error: [Error!]!
	}

	type Error {
		message: String!
	}

	${userTypeDef}
	${profileTypeDef}
	${postTypeDef}
`;
