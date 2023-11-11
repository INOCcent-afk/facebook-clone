import { graphql } from "@/graphql/generated";

export const getPosts = graphql(/* GraphQL */ `
	query getPosts {
		posts {
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
		}
	}
`);
