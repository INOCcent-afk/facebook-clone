import { graphql } from "@/graphql/generated";

export const getUserPosts = graphql(/* GraphQL */ `
	query userPosts($id: Int) {
		userPosts(id: $id) {
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
				updatedAt
				createdAt
			}
			createdAt
			updatedAt
		}
	}
`);
