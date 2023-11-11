import { graphql } from "@/graphql/generated";

export const getMe = graphql(/* GraphQL */ `
	query getMe {
		me {
			uid
			firstName
			lastName
		}
	}
`);
