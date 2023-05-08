import { LabelledAction } from "@/ui/LabelledAction";
import { Avatar, Box } from "@chakra-ui/react";
import React from "react";

export const MenuPanel = () => {
	return (
		<Box flexBasis="15%">
			<Box position="relative">
				{/* left blue border appear when link is active   */}
				<Box
					position="absolute"
					height="full"
					width={1}
					borderTopRightRadius="md"
					borderBottomRightRadius="md"
					backgroundColor="brand"
				></Box>
				<LabelledAction
					icon={<Avatar size="xs" />}
					label="Michael Dave"
				/>
			</Box>
		</Box>
	);
};
