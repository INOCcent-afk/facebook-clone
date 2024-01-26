import {
	Box,
	Button,
	Flex,
	Heading,
	Menu,
	MenuButton,
	MenuList,
	Text,
	Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useAuth } from "@/contexts";
import { ChatPreview } from "./ui/ChatPreview";
import { useSocket } from "@/contexts/SocketContext/SocketContext";
import { ChatRoom } from "@/graphql/generated/graphql";

export const MessengerMenu = () => {
	const { user: me } = useAuth();

	const [chats, setChats] = useState<ChatRoom[] | null>(null);

	const { socket } = useSocket();

	useEffect(() => {
		if (!socket) return;

		socket.emit("loadChats", {
			uid: me?.uid,
		});

		socket.on("loadChats", ({ chats }) => {
			setChats(chats);
		});

		// Cleanup function for disconnecting the event listener
		return () => {
			socket.off("loadChats");
		};
	}, [socket]);

	// const notificationCount =
	// notifications?.filter((notification) => notification?.viewed === false)
	// 	.length || 0;

	// Implement same fetching logic as Notifications

	return (
		<Menu>
			<Tooltip label="Messenger">
				<MenuButton
					as={Button}
					variant="circledButton"
					size="circledMd"
					position="relative"
				>
					<FaFacebookMessenger
						size={20}
						style={{
							width: "100%",
						}}
					/>
				</MenuButton>
			</Tooltip>

			<MenuList
				backgroundColor="gray.700"
				border="none"
				boxShadow="0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)"
				width={350}
				pb={4}
				px={2}
			>
				<Flex justifyContent="space-between">
					<Heading as="h4" color="white" px={2}>
						Chats
					</Heading>
					<Flex gap={1}>
						<Button variant="circledButton">
							<HiOutlineDotsHorizontal />
						</Button>
					</Flex>
				</Flex>

				<Box marginTop={4}>
					{chats &&
						chats?.map((chat) => {
							const filteredUser = chat?.users?.filter(
								(user) => me?.uid !== user?.uid
							)[0];

							if (!filteredUser || !chat || !chat.users) return;

							const friendUid = chat.users[1]?.uid;

							return (
								<ChatPreview
									roomId={chat.id}
									friendName={`${filteredUser.firstName} ${filteredUser.lastName}`}
									friendUid={friendUid}
									messages={chat.messages}
									key={chat.id}
								/>
							);
						})}

					{!chats?.length ? (
						<Box textAlign="center" color="white">
							<Text>No Messages</Text>
						</Box>
					) : null}
				</Box>
			</MenuList>
		</Menu>
	);
};
