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
		friendsCount: Int
		profile: Profile
		posts: [Post]
		comments: [Comment]
	}

	type Mutation {
		registerUser(user: UserInput!): User!
	}

	input UserInput {
		firstName: String
		lastName: String
		username: String
		email: String
		password: String
	}
`;
