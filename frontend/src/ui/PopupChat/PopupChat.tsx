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

interface Props {
	id: string;
	name: string;
	closeChat: (id: string) => void;
}

export const PopupChat: FC<Props> = ({ id, name, closeChat }) => {
	const { user } = useAuth();
	const { socket } = useSocket();
	const [message, setMessage] = useState("");
	const [receivedMessages, setReceivedMessages] = useState<
		{ userUid: string; message: string }[]
	>([]);

	useEffect(() => {
		if (!socket) return;

		socket.on("privateMessage", ({ userUid, message }) => {
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
						onClick={() => closeChat(id)}
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
								roomId: "IVEL84uKeebpXS5I5ViNKoajprq1-fmtgw2iGe4WKbTo2tFRDWvJ6eyG3",
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
