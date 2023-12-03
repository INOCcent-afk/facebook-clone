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
		isInFriendRequests: Boolean
		friends: [User]
		friendRequest: [Friendship]
		friendsCount: Int
	}

	type Mutation {
		registerUser(user: UserInput!): User!
		addFriend(receiverUid: String!): Friendship!
		confirmFriendRequest(userUid: String!): User!
		unfriend(userUid: String!): User!
		cancelRejectFriendRequest(userUid: String!): User!
	}

	input UserInput {
		firstName: String
		lastName: String
		username: String
		email: String
		password: String
	}
`;
