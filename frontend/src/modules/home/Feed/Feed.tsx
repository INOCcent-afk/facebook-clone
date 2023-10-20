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
				height="100vh"
				width="full"
				marginTop={HEADER_HEIGHT}
				paddingTop={8}
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
