import { graphql } from "@/graphql/generated";

export const getChats = graphql(/* GraphQL */ `
	query getChats($uid: String!) {
		chats(uid: $uid) {
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
			name
			viewers {
				userUid
			}
		}
	}
`);
