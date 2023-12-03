import { graphql } from "@/graphql/generated";

export const cancelRejectFriendRequest = graphql(/* GraphQL */ `
	mutation cancelRejectFriendRequest($userUid: String!) {
		cancelRejectFriendRequest(userUid: $userUid) {
			id
		}
	}
`);
