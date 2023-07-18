import { Header } from "@/ui";
import { Box } from "@chakra-ui/react";
import React from "react";
import { HEADER_HEIGHT } from "./utils";
import { ConversationPanel, FeedPanel, MenuPanel } from "./containers";

export const Feed = () => {
	const TOTAL_FEED_PADDING_TOP = HEADER_HEIGHT * 4 + 16;

	return (
		<>
			<Header />
			<Box
				backgroundColor="gray.900"
				height="100vh"
				width="full"
				paddingTop={`${TOTAL_FEED_PADDING_TOP}px`}
				alignItems="flex-start"
				justifyContent="space-between"
				display="flex"
			>
				<MenuPanel />
				<FeedPanel />
				<ConversationPanel />
			</Box>
		</>
	);
};
