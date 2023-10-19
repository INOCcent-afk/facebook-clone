import Head from "next/head";
import { AuthDashboard } from "../AuthDashboard";
import { Feed } from "../Feed";
import { useAuth } from "@/contexts";

export const Home = () => {
	const { user } = useAuth();

	return (
		<>
			<Head>
				<title>Facebook - log in or sign up </title>
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

			{user ? <Feed /> : <AuthDashboard />}
		</>
	);
};
