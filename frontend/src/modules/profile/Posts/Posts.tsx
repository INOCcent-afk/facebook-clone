import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { CreateFeed, ExtraLinks } from "@/ui";
import { Friends, IntroBio, Photos } from "./containers";
import { FeedPost } from "@/ui/FeedPost/FeedPost";
import { useUserPosts } from "@/apiHooks/post/useUserPosts";
import { MyLatestPost } from "@/models/post";
import { Maybe } from "@/graphql/generated/graphql";

interface Props {
	friendsCount: number;
	userId: number;
	userUid?: Maybe<string>;
}

export const Posts: FC<Props> = ({ friendsCount, userId, userUid }) => {
	const { data: posts } = useUserPosts({
		id: userId,
		enabled: true,
	});
	const [myLatestPosts, setMyLatestPosts] = useState<MyLatestPost[]>([]);

	return (
		<Flex gap={4}>
			<Box as="aside" flexBasis="40%">
				<Box position="sticky" top="-600px">
					<Stack gap={4} mb={2}>
						<Stack gap={2}>
							<IntroBio bio="WELCOME TO FB!" userUid={userUid} />
						</Stack>

						<Photos />
						<Friends friendsCount={friendsCount} />
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
					myLatestPosts={myLatestPosts}
					setMyLatestPosts={setMyLatestPosts}
					userUid={userUid}
				/>

				{myLatestPosts.reverse().map((data) => {
					if (!data) return;

					return (
						<FeedPost
							key={data.id}
							postContent={data.postContent ?? ""}
							id={data.id}
							user={data.user}
							videos={data.videos}
							images={data.images}
							createdAt={data.createdAt}
						/>
					);
				})}

				{posts &&
					posts.map((data) => {
						if (!data) return;
						return (
							<FeedPost
								key={data.id}
								postContent={data.postContent ?? ""}
								id={data.id}
								user={data.user}
								videos={data.videos}
								images={data.images}
								createdAt={data.createdAt}
							/>
						);
					})}
			</Stack>
		</Flex>
	);
};
