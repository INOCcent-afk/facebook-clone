import { graphql } from "@/graphql/generated";

export const sharePost = graphql(/* GraphQL */ `
	mutation sharePost($post: PostInput!, $sharedPostId: Int!) {
		sharePost(post: $post, sharedPostId: $sharedPostId) {
			videos
			id
			images
			createdAt
			postContent
			sharedPost {
				videos
				id
				images
				createdAt
			}
		}
	}
`);
