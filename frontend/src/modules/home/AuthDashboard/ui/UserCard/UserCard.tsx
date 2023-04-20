import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
	imageUrl: string;
	name: string;
}

export const UserCard: FC<Props> = ({ imageUrl, name }) => {
	return (
		<Box
			position="relative"
			borderRadius={4}
			overflow="hidden"
			width={160}
			height={206}
			backgroundColor="white"
			border={1}
			boxShadow="gray" // Remember to make this work
		>
			<Button
				variant="unstyled"
				position="absolute"
				top={1}
				left={1}
				zIndex={10}
			>
				<AiFillCloseCircle size={24} />
			</Button>
			<Box position="relative" height={160} width={160}>
				<Image fill priority src={imageUrl} alt={`Profile image of ${name}`} />
			</Box>
			<Box textAlign="center" padding={4}>
				<Text>{name}</Text>
			</Box>
		</Box>
	);
};
