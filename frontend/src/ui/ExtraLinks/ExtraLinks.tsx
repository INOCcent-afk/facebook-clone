import { BoxProps, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props extends BoxProps {
	links: string[];
}

export const ExtraLinks: FC<Props> = ({ links, ...restProps }) => {
	return (
		<Flex
			color="white"
			fontSize="xs"
			gap={2}
			flexWrap="wrap"
			py={2}
			{...restProps}
		>
			{links.map((link) => (
				<Text key={link}>{link}</Text>
			))}
		</Flex>
	);
};
