import { Header } from "@/ui";
import { Box } from "@chakra-ui/react";
import React from "react";
import { CoverPhoto, ProfileHeader } from "./ui";
import { HEADER_HEIGHT } from "@/utils";
import { Posts } from "../Posts/Posts";
import { useAuth } from "@/contexts";
import { useRouter } from "next/router";
import { useGetUser } from "@/apiHooks/user/useGetUser";

export const Profile = () => {
	const { user } = useAuth();
	const { query } = useRouter();
	const userId = query.user_id as string;

	const isNotMe = user ? Boolean(userId) && user?.uid !== userId : false;

	const { data, error } = useGetUser({
		uid: userId,
		enabled: isNotMe,
	});

	const friendsCount = isNotMe ? data?.friendsCount : user?.friendsCount;
	const fullName = isNotMe
		? `${data?.firstName} ${data?.lastName}`
		: `${user?.firstName} ${user?.lastName}`;
	const id = isNotMe ? data?.id : user?.id;

	console.log(data, user);

	return (
		<>
			<Header />
			<Box marginTop={HEADER_HEIGHT} backgroundColor="gray.700">
				<CoverPhoto />
				<ProfileHeader
					friendsCount={friendsCount ?? 0}
					fullName={fullName}
					posts={
						id ? (
							<Posts
								friendsCount={friendsCount ?? 0}
								id={Number(id)}
							/>
						) : null
					}
					about={<h1>About</h1>}
					friends={<h1>Friends</h1>}
				/>
			</Box>
		</>
	);
};
