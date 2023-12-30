import { Avatar, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
	id: string;
	name: string;
	closeChat: (id: string) => void;
}

export const PopupChat: FC<Props> = ({ id, name, closeChat }) => {
	return (
		<Box>
			<Flex
				alignItems="center"
				justifyContent="space-between"
				color="white"
				backgroundColor="lightcoral"
			>
				<Flex alignItems="center">
					<Avatar />
					<Text>{name}</Text>
				</Flex>

				<Flex>
					<Button onClick={() => closeChat(id)}>
						<Text as="span">X</Text>
					</Button>
				</Flex>
			</Flex>

			<Box>
				<Box height={300} width="full" backgroundColor="gray.700"></Box>
				<Box>
					<Input />
				</Box>
			</Box>
		</Box>
	);
};
