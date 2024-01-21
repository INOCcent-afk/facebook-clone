import { gql } from "apollo-server-express";

export const notificationTypeDef = gql`
	type Notification {
		id: ID!
		notificationMessage: String
		user: User
		notificationUrl: String
		createdFor: Int
	}
`;
