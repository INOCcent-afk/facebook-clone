import { useAuth } from "@/contexts";
import { useMessengerState } from "@/contexts/MessengerContext/MessengerContext";
import { useSocket } from "@/contexts/SocketContext/SocketContext";
import { Message } from "@/graphql/generated/graphql";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { FaCircle } from "react-icons/fa";

interface Props {
	friendName: string;
	roomId: string;
	messages: (Partial<Message> | null)[] | null | undefined;
	friendUid: string | null | undefined;
}

export const ChatPreview: FC<Props> = ({
	roomId,
	friendName,
	messages,
	friendUid,
}) => {
	const { user } = useAuth();
	const { socket } = useSocket();
	const { handleSetActiveChat } = useMessengerState();

	const handleOpenMessage = () => {
		if (!socket) return;

		socket?.emit("joinPrivateRoom", user?.uid, friendUid, roomId);

		handleSetActiveChat({
			roomId,
			name: friendName,
			messages: messages,
			senderUid: user?.uid as string,
			receiverUid: friendUid as string,
		});
	};

	return (
		<Flex
			p={2}
			gap={4}
			borderRadius="md"
			color="white"
			backgroundColor="gray.700"
			as={Button}
			onClick={handleOpenMessage}
			_hover={{
				backgroundColor: "gray.800",
			}}
		>
			<Avatar />
			<Flex
				justifyContent="space-between"
				width="full"
				alignItems="center"
			>
				<Box>
					<Text>{friendName}</Text>
					<Text fontSize="sm">
						{messages &&
						messages[messages?.length - 1]?.userUid ===
							user?.uid ? (
							<Text as="span">You:</Text>
						) : (
							<Text as="span">{friendName}:</Text>
						)}{" "}
						{messages && messages[messages?.length - 1]?.content}
					</Text>
				</Box>
				<Box>
					<Text as="span" color="brand" fontSize={10}>
						<FaCircle />
					</Text>
				</Box>
			</Flex>
		</Flex>
	);
};
