import { Header } from "@/ui";
import { Box } from "@chakra-ui/react";
import React from "react";
import { CoverPhoto, ProfileHeader } from "./ui";
import { HEADER_HEIGHT } from "@/utils";
import { Posts } from "../Posts/Posts";
import { useAuth } from "@/contexts";
import { useRouter } from "next/router";
import { useGetUser } from "@/apiHooks/user/useGetUser";
import { useProfileStore } from "./stores/useProfileStore";

export const Profile = () => {
	const { user: me, token } = useAuth();
	const { query } = useRouter();
	const userId = query.user_id as string;

	const isNotMe = me ? Boolean(userId) && me?.uid !== userId : false;

	const { data: userData } = useGetUser({
		uid: userId,
		token: token ?? "",
		enabled: Boolean(isNotMe && token),
	});

	const user = isNotMe ? userData : me;

	const { isEditorMode } = useProfileStore();

	return (
		<>
			<Header />
			<Box marginTop={HEADER_HEIGHT} backgroundColor="gray.700">
				<CoverPhoto
					isEditorMode={isEditorMode}
					coverPhoto={user?.profile?.coverPhoto}
				/>
				<ProfileHeader
					friendsCount={user?.friendsCount ?? 0}
					fullName={`${user?.firstName} ${user?.lastName}`}
					userUid={user?.uid}
					isFriends={Boolean(user?.isFriends)}
					isInFriendRequests={Boolean(user?.isInFriendRequests)}
					isRequestingToBeFriend={Boolean(
						user?.isRequestingToBeFriend
					)}
					profilePicture={user?.profile?.profilePicture}
					postsPanel={
						user && user.id && user.uid ? (
							<Posts
								friendsCount={user?.friendsCount ?? 0}
								userUid={user.uid}
								bio={user?.profile?.bio}
								token={token}
								friends={user.friends}
								photos={user.photos}
								userFirstName={`${user.firstName}`}
								userLastName={`${user.lastName}`}
							/>
						) : null
					}
					aboutPanel={<h1>About</h1>}
					friendsPanel={<h1>Friends</h1>}
				/>
			</Box>
		</>
	);
};
