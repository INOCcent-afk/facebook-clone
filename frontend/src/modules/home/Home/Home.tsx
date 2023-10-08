import Head from "next/head";
import { AuthDashboard } from "../AuthDashboard";
import { Feed } from "../Feed";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { graphql } from "@/gql";

const getUsers = graphql(/* GraphQL */ `
	query getUsers {
		users {
			firstName
		}
	}
`);

export const Home = () => {
	const [isAuthenticated, _] = useState(true);

	const { data } = useQuery(["films"], async () => {
		const { users } = await request("http://localhost:4000/api/", getUsers);

		return users;
	});

	console.log(data);

	return (
		<>
			<Head>
				<title>Facebook - log in or sign up</title>
				<meta
					name="description"
					content="Facebook - log in or sign up"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{isAuthenticated ? <Feed /> : <AuthDashboard />}
		</>
	);
};
