import {
	Box,
	Button,
	Flex,
	Heading,
	Menu,
	MenuButton,
	MenuList,
	Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoNotificationsSharp } from "react-icons/io5";
import { NotificationPreview } from "./ui/NotificationPreview";

export const NotificationMenu = () => {
	return (
		<Menu>
			<Tooltip label="Notifications">
				<MenuButton
					as={Button}
					variant="circledButton"
					size="circledMd"
					position="relative"
				>
					<IoNotificationsSharp
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
						Notifications
					</Heading>
					<Flex gap={1}>
						<Button variant="circledButton">
							<HiOutlineDotsHorizontal />
						</Button>
					</Flex>
				</Flex>

				<Box marginTop={4}>
					<NotificationPreview />
				</Box>
			</MenuList>
		</Menu>
	);
};
