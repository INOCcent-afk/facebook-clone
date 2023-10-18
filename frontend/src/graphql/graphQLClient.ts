import { GraphQLClient } from "graphql-request";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const graphQLClient = (token?: string) => {
	return new GraphQLClient(API_URL || "http://localhost:4000/graphql/", {
		credentials: "include",
		headers: {
			authorization: token ? `Bearer ${token}` : "",
		},
	});
};
