import { graphql } from "@/graphql/generated";

export const createNotification = graphql(/* GraphQL */ `
	mutation createNotification(
		$notificationUrl: String!
		$notificationMessage: String!
		$createdFor: String!
	) {
		createNotification(
			notificationUrl: $notificationUrl
			notificationMessage: $notificationMessage
			createdFor: $createdFor
		) {
			createdFor
			id
			notificationMessage
			notificationUrl
			user {
				uid
			}
		}
	}
`);
