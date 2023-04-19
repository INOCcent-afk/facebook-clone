import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
	imageUrl: string;
	name: string;
}

export const UserCard: FC<Props> = ({ imageUrl, name }) => {
	return (
		<HStack>
			<Box position="relative" height={300} width={150}>
				<Image
					fill
					priority
					src={imageUrl}
					alt={`Profile image of ${name}`}
				/>
			</Box>
			<Box>
				<Text>{name}</Text>
			</Box>
		</HStack>
	);
};
