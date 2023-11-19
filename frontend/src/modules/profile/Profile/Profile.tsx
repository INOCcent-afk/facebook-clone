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
	const { user: me } = useAuth();
	const { query } = useRouter();
	const userId = query.user_id as string;

	const isNotMe = me ? Boolean(userId) && me?.uid !== userId : false;

	const { data: userData, error } = useGetUser({
		uid: userId,
		enabled: isNotMe,
	});

	const user = isNotMe ? userData : me;

	console.log(user, user);

	return (
		<>
			<Header />
			<Box marginTop={HEADER_HEIGHT} backgroundColor="gray.700">
				<CoverPhoto />
				<ProfileHeader
					friendsCount={user?.friendsCount ?? 0}
					fullName={`${user?.firstName} ${user?.lastName}`}
					posts={
						user?.id ? (
							<Posts
								friendsCount={user?.friendsCount ?? 0}
								userId={Number(user.id)}
								userUid={user.uid}
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
