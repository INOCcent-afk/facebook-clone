import { Header } from "@/ui";
import { Box } from "@chakra-ui/react";
import React from "react";
import { CoverPhoto, ProfileHeader } from "./ui";
import { HEADER_HEIGHT } from "@/utils";
import { Posts } from "../Posts/Posts";
import { useGetUser } from "@/apiHooks/user/useGetUser";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts";

export const Profile = () => {
	const { user } = useAuth();
	const { query } = useRouter();
	const userId = query.user_id as string;

	const isUser = user ? Boolean(userId) && user?.uid !== userId : false;

	const { data, error, refetch } = useGetUser({
		uid: userId,
		enabled: isUser,
	});

	console.log(data);

	return (
		<>
			<Header />
			<Box marginTop={HEADER_HEIGHT} backgroundColor="gray.700">
				<CoverPhoto />
				<ProfileHeader
					posts={<Posts />}
					about={<h1>About</h1>}
					friends={<h1>Friends</h1>}
				/>
			</Box>
		</>
	);
};
