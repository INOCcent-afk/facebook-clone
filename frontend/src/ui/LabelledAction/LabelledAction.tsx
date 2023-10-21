import { BoxProps, HStack, Text } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

interface Props extends BoxProps {
	icon: ReactNode;
	label: string;
	labelFontSize?: "xs" | "sm" | "md" | "lg";
}

export const LabelledAction: FC<Props> = ({
	icon,
	label,
	labelFontSize = "xs",
	...restProps
}) => {
	return (
		<HStack
			backgroundColor="transparent"
			borderRadius="lg"
			cursor="pointer"
			padding={2}
			_hover={{
				backgroundColor: "gray.800",
			}}
			gap={1}
			{...restProps}
		>
			{icon}
			<Text size={labelFontSize} color="white">
				{label}
			</Text>
		</HStack>
	);
};
