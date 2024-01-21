import { useAuth } from "@/contexts";
import { useSocket } from "@/contexts/SocketContext/SocketContext";
import { Story } from "@/ui";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { FaBookOpen } from "react-icons/fa";

export const StoriesBlock = () => {
	const { user } = useAuth();

	const { socket } = useSocket();

	const handleShit = () => {
		if (!socket) return;

		socket.emit("sendNotification", {
			createdFor: "kJKlb4w1FnWyKnMv83zWCf1ewdG3",
			notificationMessage: "HELLO!",
			notificationUrl: "/test/test",
			senderUid: user?.uid,
		});
	};

	return (
		<Box backgroundColor="gray.700" borderRadius="md" padding={4}>
			<Flex
				color="brand"
				alignItems="center"
				gap={2}
				marginBottom={4}
				borderBottom="2px"
				borderColor="brand"
				justifyContent="center"
				paddingBottom={4}
			>
				<FaBookOpen size={22} />
				<Text fontWeight="bold" onClick={handleShit}>
					Stories
				</Text>
			</Flex>

			<HStack>
				<Story createStory />
				<Story />
				<Story />
				<Story />
				<Story />
				<Story />
			</HStack>
		</Box>
	);
};
