import { graphql } from "@/graphql/generated";

export const updateComment = graphql(/* GraphQL */ `
	mutation updateComment($commentId: Int!, $content: String!) {
		updateComment(commentId: $commentId, content: $content) {
			id
			userUid
			postId
		}
	}
`);
