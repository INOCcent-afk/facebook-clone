import { gql } from "apollo-server-express";

export const chatTypeDef = gql`
	type ChatRoom {
		id: ID!
		name: String
		users: [User]
		messages: [Message]
		viewed: Boolean
	}

	type Message {
		id: ID!
		content: String
		userUid: ID!
		chatRoomId: ID!
	}
`;
