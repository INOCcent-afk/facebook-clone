import { graphql } from "@/graphql/generated";

export const createPost = graphql(/* GraphQL */ `
	mutation createPost($post: PostInput!) {
		createPost(post: $post) {
			id
			postContent
		}
	}
`);
