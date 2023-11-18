import { graphql } from "@/graphql/generated";

export const getUserPosts = graphql(/* GraphQL */ `
	query userPosts($id: Int) {
		userPosts(id: $id) {
			id
			images
			postContent
			postParentId
			videos
			user {
				id
				uid
				firstName
				lastName
			}
			userId
			createdAt
			updatedAt
		}
	}
`);
