import { graphql } from "@/graphql/generated";

export const deleteComment = graphql(/* GraphQL */ `
	mutation deleteComment($commentId: Int!) {
		deleteComment(commentId: $commentId) {
			id
			userUid
			postId
		}
	}
`);
