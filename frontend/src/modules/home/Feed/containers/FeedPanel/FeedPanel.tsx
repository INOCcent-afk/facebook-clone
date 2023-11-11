import { Box } from "@chakra-ui/react";
import React from "react";
import { StoriesBlock } from "./containers";
import { FEED_MID_COLUMN_MAX_WIDTH } from "../../utils";
import { CreateFeed } from "@/ui";
import { usePosts } from "@/apiHooks/post/usePosts";
import { useAuth } from "@/contexts";
import { FeedPost } from "@/ui/FeedPost/FeedPost";

export const FeedPanel = () => {
	const { token } = useAuth();

	const { data: posts } = usePosts({
		token: token ?? "",
		enabled: Boolean(token),
	});

	console.log(posts);

	return (
		<Box
			display="flex"
			flexDirection="column"
			gap={4}
			flexBasis="60%"
			maxWidth={FEED_MID_COLUMN_MAX_WIDTH}
		>
			<StoriesBlock />

			<CreateFeed />

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
						/>
					);
				})}
		</Box>
	);
};
