import { Story } from "@/ui";
import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const StoriesBlock = () => {
	return (
		<Box backgroundColor="gray.700" borderRadius="md" padding={4}>
			<Text color="white" marginBottom={2}>
				Stories
			</Text>
			<HStack>
				<Story createStory />
				<Story />
				<Story />
				<Story />
				<Story />
				<Story />
			</HStack>
		</Box>
	);
};
