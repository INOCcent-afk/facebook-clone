import Head from "next/head";
import { AuthDashboard } from "../AuthDashboard";
import { Feed } from "../Feed";
import { useState } from "react";
import { useGetUsers } from "@/apiHooks/user/useGetUsers";

export const Home = () => {
	const [isAuthenticated, _] = useState(true);

	const { data } = useGetUsers();

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
