import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const ExtraLinks = () => {
	return (
		<Flex color="white" fontSize="xs" gap={2} flexWrap="wrap" py={2}>
			<Text>Privacy .</Text>
			<Text>Terms .</Text>
			<Text>Advertising .</Text>
			<Text>Ad Choices .</Text>
			<Text>Cookies .</Text>
			<Text>More .</Text>
			<Text>Meta © 2023 .</Text>
		</Flex>
	);
};
