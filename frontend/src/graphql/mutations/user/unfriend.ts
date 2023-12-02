import { graphql } from "@/graphql/generated";

export const unfriend = graphql(/* GraphQL */ `
	mutation unfriend($userUid: String!) {
		unfriend(userUid: $userUid) {
			id
		}
	}
`);
