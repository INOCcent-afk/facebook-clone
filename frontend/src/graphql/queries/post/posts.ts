import { graphql } from "@/graphql/generated";

export const getPosts = graphql(/* GraphQL */ `
	query getPosts {
		posts {
			id
			images
			postContent
			videos
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
			updatedAt
			createdAt
		}
	}
`);
