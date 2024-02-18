import { gql } from "apollo-server-express";
import { userTypeDef } from "./user";
import { profileTypeDef } from "./profile";
import { postTypeDef } from "./post";
import { friendshipTypeDef } from "./friendship";
import { chatTypeDef } from "./chat";
import { notificationTypeDef } from "./notification";
import { reactionTypeDef } from "./reaction";
import { commentTypeDef } from "./comment";

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
		comments(postId: Int!): Comments
		chats(uid: String!): [ChatRoom]
		chat(senderUid: String!, receiverUid: String!): ChatRoom
		notifications(uid: String!): [Notification]
		reactions(postId: ID!): Reactions
	}

	${userTypeDef}
	${profileTypeDef}
	${postTypeDef}
	${friendshipTypeDef}
	${chatTypeDef}
	${notificationTypeDef}
	${profileTypeDef}
	${reactionTypeDef}
	${commentTypeDef}
`;
