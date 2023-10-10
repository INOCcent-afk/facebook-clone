import { graphql } from "@/graphql/generated";

export const getUsers = graphql(/* GraphQL */ `
	query getUsers {
		users {
			firstName
			lastName
		}
	}
`);
