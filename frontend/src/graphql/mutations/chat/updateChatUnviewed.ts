import { graphql } from "@/graphql/generated";

export const updateChatViewed = graphql(/* GraphQL */ `
	mutation updateChatViewed($roomId: String!) {
		updateChatViewed(roomId: $roomId) {
			id
		}
	}
`);
