import Head from "next/head";
import { AuthDashboardAuth } from "../AuthDashboard";
import { FeedAuth } from "../Feed";
import { useGetUsers } from "@/apiHooks/user/useGetUsers";

export const Home = () => {
	const { data } = useGetUsers();

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

			{<FeedAuth />}

			<AuthDashboardAuth />
		</>
	);
};
