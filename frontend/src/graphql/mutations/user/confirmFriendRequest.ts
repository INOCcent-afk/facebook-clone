import { graphql } from "@/graphql/generated";

export const confirmFriendRequest = graphql(/* GraphQL */ `
	mutation confirmFriendRequest($userUid: String!) {
		confirmFriendRequest(userUid: $userUid) {
			id
		}
	}
`);
