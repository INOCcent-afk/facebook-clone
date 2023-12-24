import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaCircle } from "react-icons/fa";

export const ChatPreview = () => {
	return (
		<Flex
			backgroundColor="gray.700"
			p={2}
			color="white"
			gap={4}
			_hover={{
				backgroundColor: "gray.800",
			}}
			borderRadius="md"
		>
			<Avatar />
			<Flex
				justifyContent="space-between"
				width="full"
				alignItems="center"
			>
				<Box>
					<Text>Reyna ko</Text>
					<Text fontSize="sm">
						Gugutim ako <Text as="span">.5m</Text>
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
