import { gql } from "apollo-server-express";
import { userTypeDef } from "./user";
import { profileTypeDef } from "./profile";
import { postTypeDef } from "./post";
import { friendshipTypeDef } from "./friendship";
import { chatTypeDef } from "./chat";

export const rootTypeDefs = gql`
	scalar Date

	type Query {
		users: [User]
		user(uid: String!): User
		me: User
		friends(uid: String!, skip: Int!, take: Int!): User
		profiles: [Profile]
		posts: [Post]
		userPosts(id: Int): [Post]
		comments: [Comment]
		chats(uid: String!): [ChatRoom]
		chat(senderUid: String!, receiverUid: String!): ChatRoom
	}

	${userTypeDef}
	${profileTypeDef}
	${postTypeDef}
	${friendshipTypeDef}
	${chatTypeDef}
`;
