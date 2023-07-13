import { Box } from "@chakra-ui/react";
import React from "react";
import { StoriesBlock } from "./containers";
import { FEED_MID_COLUMN_MAX_WIDTH } from "../../utils";
import { CreateFeed } from "@/ui";

export const FeedPanel = () => {
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
		</Box>
	);
};
