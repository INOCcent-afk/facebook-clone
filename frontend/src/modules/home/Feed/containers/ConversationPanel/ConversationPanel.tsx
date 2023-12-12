import { Flex } from "@chakra-ui/react";
import React from "react";
import { FriendRequests } from "../FriendRequests";
import { Messenger } from "../Messenger";
import { useAuth } from "@/contexts";

export const ConversationPanel = () => {
	const { user } = useAuth();

	return (
		<Flex flexDirection="column" gap={4} flexBasis="20%" paddingRight="4">
			{user && (
				<FriendRequests friendRequest={user.friendRequestsReceiver} />
			)}
			<Messenger />
		</Flex>
	);
};
