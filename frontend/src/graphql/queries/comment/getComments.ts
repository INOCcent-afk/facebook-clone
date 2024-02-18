import { graphql } from "@/graphql/generated";

export const getComments = graphql(/* GraphQL */ `
	query getComments($postId: Int!) {
		comments(postId: $postId) {
			comments {
				id
				userUid
				user {
					id
				}
				postId
			}

			totalCount
		}
	}
`);
