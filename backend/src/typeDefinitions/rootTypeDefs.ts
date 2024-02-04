import { gql } from "apollo-server-express";
import { userTypeDef } from "./user";
import { profileTypeDef } from "./profile";
import { postTypeDef } from "./post";
import { friendshipTypeDef } from "./friendship";
import { chatTypeDef } from "./chat";
import { notificationTypeDef } from "./notification";

export const rootTypeDefs = gql`
	scalar Date

	type Query {
		users: [User]
		user(uid: String!): User
		me: User
		friends(uid: String!, skip: Int!, take: Int!): User
		profiles: [Profile]
		posts: [Post]
		userPosts(uid: String): [Post]
		comments: [Comment]
		chats(uid: String!): [ChatRoom]
		chat(senderUid: String!, receiverUid: String!): ChatRoom
		notifications(uid: String!): [Notification]
	}

	${userTypeDef}
	${profileTypeDef}
	${postTypeDef}
	${friendshipTypeDef}
	${chatTypeDef}
	${notificationTypeDef}
	${profileTypeDef}
`;
