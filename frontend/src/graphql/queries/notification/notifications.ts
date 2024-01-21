import { graphql } from "@/graphql/generated";

export const getNotifications = graphql(/* GraphQL */ `
	query getNotifications($uid: String!) {
		notifications(uid: $uid) {
			id
			createdFor
			notificationMessage
			notificationUrl
		}
	}
`);
