import { graphql } from "@/graphql/generated";

export const createPost = graphql(/* GraphQL */ `
	mutation createPost($post: PostInput!) {
		createPost(post: $post) {
			videos
			id
			images
			createdAt
			user {
				id
				uid
				firstName
				lastName
			}
			postContent
			postParentId
		}
	}
`);
