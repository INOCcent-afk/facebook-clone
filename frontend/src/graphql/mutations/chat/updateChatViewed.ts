import { graphql } from "@/graphql/generated";

export const updateChatUnviewed = graphql(/* GraphQL */ `
	mutation updateChatUnviewed($roomId: String!) {
		updateChatUnviewed(roomId: $roomId) {
			id
		}
	}
`);
