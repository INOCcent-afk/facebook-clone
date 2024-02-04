import { graphql } from "@/graphql/generated";

export const getMe = graphql(/* GraphQL */ `
	query getMe {
		me {
			id
			uid
			email
			firstName
			lastName
			friendsCount
			profile {
				coverPhoto
				profilePicture
				id
				userUid
			}
			friendRequestsReceiver {
				User {
					firstName
					lastName
					uid
					id
				}
			}
			friendRequestsSender {
				User {
					firstName
					lastName
					uid
					id
				}
			}
		}
	}
`);
