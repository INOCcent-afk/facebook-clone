import { graphql } from "@/graphql/generated";

export const cancelFriendRequest = graphql(/* GraphQL */ `
	mutation cancelFriendRequest($userUid: String!) {
		cancelFriendRequest(userUid: $userUid) {
			id
		}
	}
`);
