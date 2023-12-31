import {
	Box,
	Button,
	Flex,
	Heading,
	Menu,
	MenuButton,
	MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { ChatPreview } from "./ui/ChatPreview";

export const MessengerMenu = () => {
	const messages = [
		{ id: "1", name: "Imps" },
		{ id: "2", name: "Troy" },
		{ id: "3", name: "Pol" },
	];

	return (
		<Menu>
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
					{messages.map((message) => (
						<ChatPreview
							id={message.id}
							name={message.name}
							key={message.id}
						/>
					))}
				</Box>
			</MenuList>
		</Menu>
	);
};
