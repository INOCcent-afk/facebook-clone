import { Box, BoxProps } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

interface Props extends BoxProps {
	children: ReactNode;
}

export const ContentContainer: FC<Props> = ({ children, ...restProps }) => {
	return (
		<Box
			backgroundColor="gray.700"
			borderRadius="md"
			padding={4}
			{...restProps}
		>
			{children}
		</Box>
	);
};
