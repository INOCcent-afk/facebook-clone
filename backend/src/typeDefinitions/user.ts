import { gql } from "apollo-server";

export const userTypeDef = gql`
	type User {
		id: ID!
		uid: String
		firstName: String
		lastName: String
		username: String
		email: String
		profile: Profile
		posts: [Post]
		comments: [Comment]
		isFriends: Boolean
		friends: [User]
		friendRequests: [User]
		friendsCount: Int
	}

	type Mutation {
		registerUser(user: UserInput!): User!
		addFriend(friendUid: String): User!
		removeFriend(friendUid: String): User!
	}

	input UserInput {
		firstName: String
		lastName: String
		username: String
		email: String
		password: String
	}
`;
