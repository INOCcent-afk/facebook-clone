import { graphql } from "@/graphql/generated";

export const getUserPosts = graphql(/* GraphQL */ `
	query userPosts($uid: String) {
		userPosts(uid: $uid) {
			id
			images {
				id
				userUid
				image
			}
			postContent
			userUid
			user {
				id
				uid
				firstName
				lastName
			}
			sharedPost {
				id
				images {
					id
					userUid
					image
				}
				userUid
				user {
					id
					uid
					firstName
					lastName
				}
				postContent
				updatedAt
				createdAt
			}
			createdAt
			updatedAt
		}
	}
`);
