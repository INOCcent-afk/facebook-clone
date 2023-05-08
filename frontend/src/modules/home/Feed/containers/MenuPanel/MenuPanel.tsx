import { LabelledAction } from "@/ui/LabelledAction";
import { Avatar, Box } from "@chakra-ui/react";
import React from "react";

export const MenuPanel = () => {
	return (
		<Box flexBasis="15%" bg="gray">
			<LabelledAction icon={<Avatar />} label="Michael Dave" />
		</Box>
	);
};
