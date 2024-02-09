import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import { CreateFeed, ExtraLinks } from "@/ui";
import { Friends, IntroBio, Photos } from "./containers";
import { FeedPost } from "@/ui/FeedPost/FeedPost";
import { useUserPosts } from "@/apiHooks/post/useUserPosts";
import { Maybe, Photo, User } from "@/graphql/generated/graphql";
interface Props {
	friendsCount: number;
	userUid: string;
	bio: Maybe<string> | undefined;
	token: string | null;
	friends: (Partial<User> | null)[] | null | undefined;
	photos: (Partial<Photo> | null)[] | null | undefined;
	userFirstName: string;
	userLastName: string;
}

export const Posts: FC<Props> = ({
	friendsCount,
	userUid,
	bio,
	token,
	friends,
	photos,
	userFirstName,
	userLastName,
}) => {
	const { data: posts } = useUserPosts({
		uid: userUid,
		enabled: true,
	});

	return (
		<Flex gap={4} minHeight="100vh">
			<Box as="aside" flexBasis="40%">
				<Box position="sticky" top="-600px">
					<Stack gap={4} mb={2}>
						{userUid && (
							<Stack gap={2}>
								<IntroBio
									bio={bio}
									userUid={userUid}
									token={token}
									userFullName={userFirstName}
								/>
							</Stack>
						)}

						<Photos photos={photos} />
						<Friends
							friends={friends}
							friendsCount={friendsCount}
						/>
					</Stack>
					<ExtraLinks
						links={[
							"Privacy .",
							"Terms .",
							"Advertising .",
							"Ad Choices .",
							"Cookies .",
							"More .",
							"Meta © 2023 .",
						]}
					/>
				</Box>
			</Box>

			<Stack flexBasis="60%">
				<CreateFeed
					userUid={userUid}
					userFirstName={userFirstName}
					userLastName={`${userLastName}`}
				/>

				{posts &&
					posts.map((data) => {
						if (!data) return;
						return (
							<FeedPost
								key={data.id}
								postContent={data.postContent ?? ""}
								id={data.id}
								user={data.user}
								images={data.images}
								createdAt={data.createdAt}
								sharedPost={data.sharedPost}
							/>
						);
					})}
			</Stack>
		</Flex>
	);
};
