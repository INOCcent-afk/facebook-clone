import { Story } from "@/ui";
import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const StoriesBlock = () => {
	return (
		<Box backgroundColor="gray.700" borderRadius="md" padding={2}>
			<Text color="white">Stories</Text>
			<HStack>
				<Story />
				<Story />
				<Story />
			</HStack>
		</Box>
	);
};
