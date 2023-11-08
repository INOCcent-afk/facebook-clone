import { graphql } from "@/graphql/generated";

export const getPosts = graphql(/* GraphQL */ `
	query getPosts {
		posts {
			id
			images
			postContent
			postParentId
			userId
			videos
		}
	}
`);
