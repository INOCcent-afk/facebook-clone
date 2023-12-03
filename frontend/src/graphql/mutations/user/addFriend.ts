import { graphql } from "@/graphql/generated";

export const addFriend = graphql(/* GraphQL */ `
	mutation addFriend($receiverUid: String!) {
		addFriend(receiverUid: $receiverUid) {
			id
			createdAt
			receiverUid
			senderUid
		}
	}
`);
