import { ContentContainer } from "@/containers/ContentContainer/ContentContainer";
import {
	Box,
	BoxProps,
	Flex,
	Grid,
	GridItem,
	Heading,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

interface Props extends BoxProps {}

export const Photos: FC<Props> = ({ ...restProps }) => {
	return (
		<ContentContainer {...restProps}>
			<Flex alignItems="flex-start" justifyContent="space-between" mb={4}>
				<Heading fontSize="xl" color="white">
					Photos
				</Heading>

				<Link href="/">
					<Text as="span" color="brand">
						See all photos
					</Text>
				</Link>
			</Flex>

			<Box>
				<Grid
					templateColumns="repeat(3, 1fr)"
					gap={2}
					borderRadius="lg"
					overflow="hidden"
				>
					<GridItem w="100%" h="129px" bg="blue.500"></GridItem>
					<GridItem w="100%" h="129px" bg="blue.500"></GridItem>
					<GridItem w="100%" h="129px" bg="blue.500"></GridItem>
					<GridItem w="100%" h="129px" bg="blue.500"></GridItem>
					<GridItem w="100%" h="129px" bg="blue.500"></GridItem>
					<GridItem w="100%" h="129px" bg="blue.500"></GridItem>
					<GridItem w="100%" h="129px" bg="blue.500"></GridItem>
					<GridItem w="100%" h="129px" bg="blue.500"></GridItem>
					<GridItem w="100%" h="129px" bg="blue.500"></GridItem>
				</Grid>
			</Box>
		</ContentContainer>
	);
};
