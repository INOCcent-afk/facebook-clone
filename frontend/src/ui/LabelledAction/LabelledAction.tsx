import { BoxProps, HStack, Text } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

interface Props {
	icon: ReactNode;
	label: string;
	textSize?: "xs" | "sm" | "md" | "lg";
}

export const LabelledAction: FC<Props> = ({ icon, label, textSize = "xs" }) => {
	return (
		<HStack
			backgroundColor="transparent"
			borderRadius="lg"
			cursor="pointer"
			padding={2}
			_hover={{
				backgroundColor: "gray.800",
			}}
			marginLeft={3}
			gap={1}
		>
			{icon}
			<Text size={textSize} color="white">
				{label}
			</Text>
		</HStack>
	);
};
