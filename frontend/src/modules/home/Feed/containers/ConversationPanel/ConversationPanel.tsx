import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { FriendRequests } from "../FriendRequests";
import { Messenger } from "../Messenger";

export const ConversationPanel = () => {
	return (
		<Flex flexDirection="column" gap={4} flexBasis="15%" paddingRight="4">
			<FriendRequests />
			<Messenger />
		</Flex>
	);
};
