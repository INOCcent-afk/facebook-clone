import { gql } from "apollo-server-express";

export const chatTypeDef = gql`
	type ChatRoom {
		id: ID!
		name: String
		users: [User]
		messages: [Message]
		viewers: [ViewedChatRoom]
	}

	type Message {
		id: ID!
		content: String
		userUid: ID!
		chatRoomId: ID!
	}

	type Mutation {
		updateChatViewed(roomId: String!): ChatRoom!
		updateChatUnviewed(roomId: String!): ChatRoom!
	}

	type ViewedChatRoom {
		userUid: String
		chatRoomId: Int
	}
`;
