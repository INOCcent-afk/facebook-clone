import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { CreateFeed, ExtraLinks } from "@/ui";
import { Friends, IntroBio, Photos } from "./containers";
import { FeedPost } from "@/ui/FeedPost/FeedPost";
import { useUserPosts } from "@/apiHooks/post/useUserPosts";
import { MyLatestPost } from "@/models/post";

interface Props {
	friendsCount: number;
	id: number;
}

export const Posts: FC<Props> = ({ friendsCount, id }) => {
	const { data: posts } = useUserPosts({
		id,
		enabled: true,
	});
	const [myLatestPosts, setMyLatestPosts] = useState<MyLatestPost[]>([]);

	console.log(id);

	return (
		<Flex gap={4}>
			<Box as="aside" flexBasis="40%">
				<Box position="sticky" top="-600px">
					<Stack gap={4} mb={2}>
						<Stack gap={2}>
							<IntroBio />
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
