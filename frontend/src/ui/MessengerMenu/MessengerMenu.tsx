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
	useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useAuth } from "@/contexts";
import { ChatPreview } from "./ui/ChatPreview";
import { useSocket } from "@/contexts/SocketContext/SocketContext";
import { useGetChats } from "@/apiHooks/chat/useGetChats";
import { useQueryClient } from "@tanstack/react-query";

export const MessengerMenu = () => {
	const { user: me, token } = useAuth();

	const { data: chats } = useGetChats({
		token: token ?? "",
		uid: me?.uid ?? "",
		enabled: false,
	});

	const { socket } = useSocket();

	const { isOpen, onClose, onOpen } = useDisclosure();

	const queryClient = useQueryClient();

	useEffect(() => {
		if (!socket || !me) return;

		socket.emit("loadChats", {
			uid: me?.uid,
		});

		socket.on("loadChats", ({ chats }) => {
			queryClient.setQueryData(["chats"], chats);
		});

		if (isOpen) {
			socket.emit("viewChats", {
				uid: me?.uid,
			});
		}

		socket.on(`${me?.uid}_viewChats`, ({ chats }) => {
			queryClient.setQueryData(["chats"], chats);
		});

		// Cleanup function for disconnecting the event listener
		return () => {
			socket.off("loadChats");
			socket.off(`${me?.uid}_viewChats`);
		};
	}, [socket, me, chats, isOpen]);

	const chatCounts =
		chats?.filter((chat) =>
			chat?.viewers?.some((viewer) => viewer?.userUid === me?.uid)
		).length || 0;

	return (
		<Menu onOpen={onOpen} onClose={onClose}>
			<Tooltip label="Messenger">
				<MenuButton
					as={Button}
					variant="circledButton"
					size="circledMd"
					position="relative"
				>
					{Boolean(chatCounts) && (
						<Text
							position="absolute"
							backgroundColor="red.500"
							borderRadius="full"
							as="span"
							width={4}
							height={4}
							fontSize="xs"
							textAlign="center"
							display="flex"
							alignItems="center"
							justifyContent="center"
							top={1}
							right={1}
						>
							{chatCounts}
						</Text>
					)}
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

							const friendUid = chat.users.find(
								(user) => user?.uid !== me?.uid
							);

							return (
								<ChatPreview
									roomId={chat.id}
									friendName={`${filteredUser.firstName} ${filteredUser.lastName}`}
									friendUid={friendUid?.uid}
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
