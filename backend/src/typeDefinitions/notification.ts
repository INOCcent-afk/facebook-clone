import { gql } from "apollo-server-express";

export const notificationTypeDef = gql`
	type Notification {
		id: ID!
		notificationMessage: String
		user: User
		notificationUrl: String
		createdFor: String
		viewed: Boolean
	}

	type Notifications {
		notifications: [Notification]
		allViewed: Boolean
	}

	type NotificationCount {
		id: ID!
		user: User
		count: Int
	}

	type Mutation {
		createNotification(
			notificationUrl: String!
			notificationMessage: String!
			createdFor: String!
		): Notification
	}
`;
