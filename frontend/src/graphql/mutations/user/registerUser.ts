import { graphql } from "@/graphql/generated";

export const registerUser = graphql(/* GraphQL */ `
	mutation registerUser($user: UserInput!) {
		registerUser(user: $user) {
			error {
				message
			}
			user {
				email
				id
				uid
			}
		}
	}
`);