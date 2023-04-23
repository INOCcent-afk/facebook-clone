import { Box, Divider, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { availableTranslatedLanguages } from "./AvailableTranslatedLanguages";

// Language Feature

export const AuthDashboardFooter = () => {
	return (
		<Box maxWidth={1000} marginX="auto">
			<HStack paddingY={4} gap={2} flexWrap="wrap">
				{availableTranslatedLanguages.map((language) => (
					<Text fontSize="sm" key={language} color="gray">
						{language}
					</Text>
				))}
			</HStack>
			<Divider marginBottom={4} />
			<Text color="gray" fontSize="xs">
				Meta © 2023
			</Text>
		</Box>
	);
};
