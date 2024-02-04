import { graphql } from "@/graphql/generated";

export const getUserPosts = graphql(/* GraphQL */ `
	query userPosts($uid: String) {
		userPosts(uid: $uid) {
			id
			images
			postContent
			videos
			userId
			user {
				id
				uid
				firstName
				lastName
			}
			sharedPost {
				id
				images
				videos
				userId
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
