import { gql } from "apollo-server";

export const friendshipTypeDef = gql`
	type Friendship {
		id: Int
		userId: Int
		senderUid: String
		receiverUid: String
		createdAt: Date
		User: User
	}
`;
