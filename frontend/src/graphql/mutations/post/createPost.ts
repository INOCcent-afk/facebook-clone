import { graphql } from "@/graphql/generated";

export const createPost = graphql(/* GraphQL */ `
	mutation createPost($post: PostInput!, $images: [ImageInput]) {
		createPost(post: $post, images: $images) {
			videos
			id
			images
			createdAt
			postContent
		}
	}
`);
