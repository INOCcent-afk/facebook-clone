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
				bio
				cover_photo
				profilePicture
			}
			friendRequest {
				User {
					firstName
					lastName
				}
			}
		}
	}
`);
