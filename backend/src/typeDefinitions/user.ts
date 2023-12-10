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
		isRequestingToBeFriend: Boolean
		friends: [User]
		friendsCount: Int
		friendRequestsReceiver: [Friendship]
		friendRequestsSender: [Friendship]
	}

	type Mutation {
		registerUser(user: UserInput!): User!
		addFriend(receiverUid: String!): Friendship!
		confirmFriendRequest(userUid: String!): User!
		unfriend(userUid: String!): User!
		rejectFriendRequest(userUid: String!): Friendship!
		cancelFriendRequest(userUid: String!): Friendship!
	}

	input UserInput {
		firstName: String
		lastName: String
		username: String
		email: String
		password: String
	}
`;
