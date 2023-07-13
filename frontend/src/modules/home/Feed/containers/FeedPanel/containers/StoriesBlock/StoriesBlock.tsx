import { Story } from "@/ui";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { FaBookOpen } from "react-icons/fa";

export const StoriesBlock = () => {
	return (
		<Box backgroundColor="gray.700" borderRadius="md" padding={4}>
			<Flex
				color="brand"
				alignItems="center"
				gap={2}
				marginBottom={4}
				borderBottom="2px"
				borderColor="brand"
				justifyContent="center"
				paddingBottom={4}
			>
				<FaBookOpen size={22} />
				<Text fontWeight="bold">Stories</Text>
			</Flex>

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
