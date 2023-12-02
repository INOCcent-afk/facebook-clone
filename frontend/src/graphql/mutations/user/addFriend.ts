import { graphql } from "@/graphql/generated";

export const addFriend = graphql(/* GraphQL */ `
	mutation addFriend($userUid: String!) {
		addFriend(userUid: $userUid) {
			id
		}
	}
`);
