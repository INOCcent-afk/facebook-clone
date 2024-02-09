import { graphql } from "@/graphql/generated";

export const getPosts = graphql(/* GraphQL */ `
	query getPosts {
		posts {
			id
			image
			images {
				id
				userUid
				image
			}
			userUid
			postContent
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
			updatedAt
			createdAt
		}
	}
`);
