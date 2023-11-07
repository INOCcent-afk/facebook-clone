import { graphql } from "@/graphql/generated";

export const updatePost = graphql(/* GraphQL */ `
	mutation updatePost($postId: ID!, $post: PostInput!) {
		updatePost(postId: $postId, post: $post) {
			id
		}
	}
`);
