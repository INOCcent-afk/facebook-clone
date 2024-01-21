import { gql } from "apollo-server-express";

export const notificationTypeDef = gql`
	type Notification {
		id: ID!
		notificationMessage: String
		user: User
		notificationUrl: String
		createdFor: String
	}

	type Mutation {
		createNotification(
			notificationUrl: String!
			notificationMessage: String!
			createdFor: String!
		): Notification
	}
`;
