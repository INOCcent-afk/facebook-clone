import { useMessengerState } from "@/contexts/MessengerContext/MessengerContext";
import { useSocket } from "@/contexts/SocketContext/SocketContext";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { FaCircle } from "react-icons/fa";

interface Props {
	name: string;
	id: string | undefined | null;
}

export const ChatPreview: FC<Props> = ({ id, name }) => {
	if (!id) return null;

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
					<Text>{name}</Text>
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
