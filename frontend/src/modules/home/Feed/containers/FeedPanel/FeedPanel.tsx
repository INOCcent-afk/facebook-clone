import { Box } from "@chakra-ui/react";
import React from "react";
import { StoriesBlock } from "./containers";
import { FEED_MID_COLUMN_MAX_WIDTH } from "../../utils";
import { CreateFeed } from "@/ui";
import { usePosts } from "@/apiHooks/post/usePosts";
import { useAuth } from "@/contexts";
import { FeedPost } from "@/ui/FeedPost/FeedPost";

export const FeedPanel = () => {
	const { user, token } = useAuth();

	const { data: posts } = usePosts({
		token: token ?? "",
		enabled: Boolean(token),
	});

	return (
		<Box
			display="flex"
			flexDirection="column"
			gap={4}
			flexBasis="60%"
			maxWidth={FEED_MID_COLUMN_MAX_WIDTH}
		>
			<StoriesBlock />

			{user?.uid && (
				<CreateFeed
					userUid={user?.uid}
					userFirstName={`${user.firstName}`}
					userLastName={`${user.lastName}`}
				/>
			)}

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
							sharedPost={data.sharedPost}
						/>
					);
				})}
		</Box>
	);
};
