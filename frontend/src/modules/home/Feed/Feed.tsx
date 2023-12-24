import { Header } from "@/ui";
import { Box } from "@chakra-ui/react";
import React from "react";
import { ConversationPanel, FeedPanel, MenuPanel } from "./containers";
import { HEADER_HEIGHT } from "@/utils";

export const Feed = () => {
	return (
		<>
			<Header />
			<Box
				backgroundColor="gray.900"
				height={`calc(100vh - ${HEADER_HEIGHT}px)`}
				width="full"
				marginTop={HEADER_HEIGHT}
				paddingTop={8}
				alignItems="start"
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
