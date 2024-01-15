import {
	Avatar,
	Box,
	Button,
	Flex,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ChatMessage } from "../ChatMessage/ChatMessage";
import { useSocket } from "@/contexts/SocketContext/SocketContext";
import { useAuth } from "@/contexts";
import { Message } from "@/graphql/generated/graphql";

interface Props {
	roomId: string;
	name: string;
	receiverUid: string;
	senderUid: string;
	messages: (Partial<Message> | null)[] | null | undefined;
	closeChat: (id: string) => void;
}

export const PopupChat: FC<Props> = ({
	roomId,
	name,
	closeChat,
	receiverUid,
	senderUid,
	messages,
}) => {
	const { user } = useAuth();
	const { socket } = useSocket();
	const [message, setMessage] = useState("");
	const [receivedMessages, setReceivedMessages] = useState<
		{ userUid: string; message: string }[]
	>([]);

	useEffect(() => {
		if (!socket) return;

		socket.on("privateMessage", ({ userUid, message }) => {
			console.log(userUid, message);
			setReceivedMessages((prevMessages) => [
				...prevMessages,
				{
					userUid,
					message,
				},
			]);
		});

		// Cleanup function for disconnecting the event listener
		return () => {
			socket.off("privateMessage");
		};
	}, [socket]);

	console.log(receivedMessages);

	return (
		<Box width={328}>
			<Flex
				alignItems="center"
				justifyContent="space-between"
				color="white"
				borderBottomWidth={1}
				borderBottomColor="gray.300"
				backgroundColor="gray.700"
				paddingX={2}
				paddingY={1}
			>
				<Flex alignItems="center" gap={2}>
					<Avatar size="sm" />
					<Text>{name}</Text>
				</Flex>

				<Flex>
					<Button
						onClick={() => closeChat(roomId)}
						variant="circleUnstyled"
					>
						<IoMdClose size={24} />
					</Button>
				</Flex>
			</Flex>

			<Box>
				<Stack
					height={430}
					width="full"
					backgroundColor="gray.700"
					paddingX={2}
					color="white"
				>
					{messages &&
						messages?.map((chat, index) => {
							if (!chat) return;

							return (
								<ChatMessage
									showAvatar={true}
									isMyMessage={chat.userUid === user?.uid}
									message={chat.content as string}
									key={index}
								/>
							);
						})}
					{receivedMessages.map((chat, index) => (
						<ChatMessage
							showAvatar={true}
							isMyMessage={chat.userUid === user?.uid}
							message={chat.message}
							key={index}
						/>
					))}
				</Stack>
				<Flex>
					<Input
						color="white"
						onChange={(e) => {
							setMessage(e.currentTarget.value);
						}}
						value={message}
					/>
					<Button
						isDisabled={!message}
						onClick={() => {
							if (!socket) return;

							socket.emit("privateMessage", {
								roomId: roomId,
								senderUid,
								receiverUid: receiverUid,
								message,
							});

							setMessage("");
						}}
					>
						SEND
					</Button>
				</Flex>
			</Box>
		</Box>
	);
};
