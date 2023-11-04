import { graphql } from "@/graphql/generated";

export const getUser = graphql(/* GraphQL */ `
	query getUser($uid: String!) {
		user(uid: $uid) {
			error {
				message
			}
			user {
				firstName
				email
				followedBy {
					uid
				}
				following {
					uid
				}
				profile {
					profilePicture
					cover_photo
					profilePicture
					id
					userId
				}
			}
		}
	}
`);