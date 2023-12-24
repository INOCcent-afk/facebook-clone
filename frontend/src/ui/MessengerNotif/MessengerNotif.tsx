import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export const MessengerNotif = () => {
	return (
		<Box position="absolute">
			<Flex>
				<Heading as="h4">Chats</Heading>
				<Flex>
					<Button variant="circledButton">
						<HiOutlineDotsHorizontal />
					</Button>
					<Button variant="circledButton">
						<HiOutlineDotsHorizontal />
					</Button>
					<Button variant="circledButton">
						<HiOutlineDotsHorizontal />
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};
