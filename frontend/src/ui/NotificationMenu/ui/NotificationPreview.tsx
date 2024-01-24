import { User } from "@/graphql/generated/graphql";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { FaCircle } from "react-icons/fa";

interface Props {
	user: (Partial<User> | null) | null | undefined;
	message: string | null | undefined;
}

export const NotificationPreview: FC<Props> = ({ user, message }) => {
	if (!message) return null;
	return (
		<Button
			display="flex"
			variant="unstyled"
			width="full"
			justifyContent="space-between"
			paddingLeft={2}
			paddingRight={2}
			alignItems="flex-start"
		>
			<Flex gap={4}>
				<Avatar size="md" />
				<Text color="white">{message}</Text>
			</Flex>
			{/* <Box>
				<Text as="span" color="brand" fontSize="sm">
					<FaCircle />
				</Text>
			</Box> */}
		</Button>
	);
};
