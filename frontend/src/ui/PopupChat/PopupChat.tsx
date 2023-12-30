import {
	Avatar,
	Box,
	Button,
	Flex,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { ChatMessage } from "../ChatMessage/ChatMessage";

interface Props {
	id: string;
	name: string;
	closeChat: (id: string) => void;
}

export const PopupChat: FC<Props> = ({ id, name, closeChat }) => {
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
					<ChatMessage />
					<ChatMessage showAvatar={true} />
					<ChatMessage isMyMessage={true} />
					<ChatMessage isMyMessage={true} />
					<ChatMessage isMyMessage={true} />
				</Stack>
				<Box>
					<Input />
				</Box>
			</Box>
		</Box>
	);
};
