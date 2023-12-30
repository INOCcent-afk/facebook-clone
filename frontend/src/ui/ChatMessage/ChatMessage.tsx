import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
	showAvatar?: boolean;
	isMyMessage?: boolean;
}

export const ChatMessage: FC<Props> = ({ showAvatar, isMyMessage }) => {
	return (
		<Flex
			alignItems="end"
			gap={2}
			alignSelf={isMyMessage ? "end" : "start"}
		>
			{showAvatar && !isMyMessage && <Avatar size="sm" />}

			<Box
				borderRadius="xl"
				paddingX={4}
				py={2}
				maxWidth={190}
				backgroundColor="#303030"
				marginLeft={showAvatar ? 0 : 8}
			>
				<Text>HELLO</Text>
			</Box>
		</Flex>
	);
};
