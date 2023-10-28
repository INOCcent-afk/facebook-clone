import { gql } from "apollo-server";

export const userTypeDef = gql`
	type User {
		id: ID!
		uid: String
		firstName: String
		lastName: String
		username: String
		email: String
		followedBy: [User]
		following: [User]
		profile: Profile
		posts: [Post]
		comments: [Comment]
	}

	type Mutation {
		registerUser(user: UserInput!): UserPayload!
	}

	input UserInput {
		firstName: String
		lastName: String
		username: String
		email: String
		password: String
	}

	type UserPayload {
		error: [Error!]!
		user: User
	}

	type Error {
		message: String!
	}
`;
