import { graphql } from "@/graphql/generated";

export const getChat = graphql(/* GraphQL */ `
	query getChat($senderUid: String!, $receiverUid: String!) {
		chat(senderUid: $senderUid, receiverUid: $receiverUid) {
			id
			messages {
				id
				content
				userUid
			}
			users {
				uid
				firstName
				lastName
			}
		}
	}
`);
