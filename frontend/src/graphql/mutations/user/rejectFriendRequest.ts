import { graphql } from "@/graphql/generated";

export const rejectFriendRequest = graphql(/* GraphQL */ `
	mutation rejectFriendRequest($userUid: String!) {
		rejectFriendRequest(userUid: $userUid) {
			id
		}
	}
`);
