import { graphql } from "@/graphql/generated";

export const sharePost = graphql(/* GraphQL */ `
	mutation sharePost($post: PostInput!, $sharedPostId: Int!) {
		sharePost(post: $post, sharedPostId: $sharedPostId) {
			id
			images {
				id
				userUid
				image
			}
			createdAt
			postContent
			sharedPost {
				id
				userUid
				images {
					id
					userUid
					image
				}
				createdAt
			}
		}
	}
`);
