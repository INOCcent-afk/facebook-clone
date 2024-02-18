import { graphql } from "@/graphql/generated";

export const createComment = graphql(/* GraphQL */ `
	mutation createComment($postId: Int!, $content: String!) {
		createComment(postId: $postId, content: $content) {
			id
			userUid
			postId
		}
	}
`);
