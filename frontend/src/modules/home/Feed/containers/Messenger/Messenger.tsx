import { LabelledAction } from "@/ui";
import { Avatar, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const Messenger = () => {
	return (
		<>
			<VStack alignItems="flex-start">
				<Flex
					width="full"
					alignItems="center"
					justifyContent="space-between"
				>
					<Text color="white">Contacts</Text>
				</Flex>
				<Flex flexDirection="column" width="full">
					<LabelledAction
						padding={2}
						marginLeft={-2}
						icon={<Avatar size="sm" />}
						label="Julaika Tradio Inoc"
						labelFontSize="xs"
					/>
					<LabelledAction
						padding={2}
						marginLeft={-2}
						icon={<Avatar size="sm" />}
						label="Julaika Tradio Inoc"
						labelFontSize="xs"
					/>
					<LabelledAction
						padding={2}
						marginLeft={-2}
						icon={<Avatar size="sm" />}
						label="Julaika Tradio Inoc"
						labelFontSize="xs"
					/>
					<LabelledAction
						padding={2}
						marginLeft={-2}
						icon={<Avatar size="sm" />}
						label="Julaika Tradio Inoc"
						labelFontSize="xs"
					/>
				</Flex>
			</VStack>
		</>
	);
};
