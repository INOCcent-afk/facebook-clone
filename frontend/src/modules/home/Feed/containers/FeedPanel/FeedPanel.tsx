import { Box } from "@chakra-ui/react";
import React from "react";
import { StoriesBlock } from "./containers";
import { FEED_MID_COLUMN_MAX_WIDTH } from "../../utils";

export const FeedPanel = () => {
	return (
		<Box flexBasis="60%" maxWidth={FEED_MID_COLUMN_MAX_WIDTH}>
			<StoriesBlock />
		</Box>
	);
};
