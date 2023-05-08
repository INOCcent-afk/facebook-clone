import { BoxProps, HStack, Text } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

interface Props extends BoxProps {
	icon: ReactNode;
	label: string;
}

export const LabelledAction: FC<Props> = ({ icon, label, ...restProps }) => {
	return (
		<HStack
			backgroundColor="transparent"
			borderRadius="lg"
			_hover={{
				backgroundColor: "red.100",
			}}
			{...restProps}
		>
			{icon}
			<Text>{label}</Text>
		</HStack>
	);
};
