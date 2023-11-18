import { graphql } from "@/graphql/generated";

export const getUser = graphql(/* GraphQL */ `
	query getUser($uid: String!) {
		user(uid: $uid) {
			id
			firstName
			lastName
			email
			friendsCount
			profile {
				profilePicture
				cover_photo
				profilePicture
				id
				userId
			}
		}
	}
`);
