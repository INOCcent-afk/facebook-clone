import { ContentContainer } from "@/ui";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
	friendsCount: number;
}

export const Friends: FC<Props> = ({ friendsCount, ...restProps }) => {
	if (!friendsCount) {
		return null;
	}
	return (
		<ContentContainer {...restProps}>
			<Flex alignItems="flex-start" justifyContent="space-between" mb={4}>
				<Box>
					<Heading fontSize="xl" color="white">
						Friends
					</Heading>
					<Text color="gray.600">{friendsCount} friends</Text>
				</Box>

				<Link href="/">
					<Text as="span" color="brand">
						See all friends
					</Text>
				</Link>
			</Flex>

			<Box>
				<Grid
					templateColumns="repeat(3, 1fr)"
					rowGap={4}
					columnGap={2}
					borderRadius="lg"
					overflow="hidden"
				>
					<GridItem display="flex" flexDirection="column" gap={1}>
						<Box
							w="100%"
							h="129px"
							bg="blue.500"
							borderRadius="lg"
						></Box>
						<Text color="white" fontWeight={600} fontSize="sm">
							Rachelle Tan
						</Text>
					</GridItem>
					<GridItem display="flex" flexDirection="column" gap={1}>
						<Box
							w="100%"
							h="129px"
							bg="blue.500"
							borderRadius="lg"
						></Box>
						<Text color="white" fontWeight={600} fontSize="sm">
							Rachelle Tan
						</Text>
					</GridItem>
					<GridItem display="flex" flexDirection="column" gap={1}>
						<Box
							w="100%"
							h="129px"
							bg="blue.500"
							borderRadius="lg"
						></Box>
						<Text color="white" fontWeight={600} fontSize="sm">
							Rachelle Tan
						</Text>
					</GridItem>
					<GridItem display="flex" flexDirection="column" gap={1}>
						<Box
							w="100%"
							h="129px"
							bg="blue.500"
							borderRadius="lg"
						></Box>
						<Text color="white" fontWeight={600} fontSize="sm">
							Rachelle Tan
						</Text>
					</GridItem>
					<GridItem display="flex" flexDirection="column" gap={1}>
						<Box
							w="100%"
							h="129px"
							bg="blue.500"
							borderRadius="lg"
						></Box>
						<Text color="white" fontWeight={600} fontSize="sm">
							Rachelle Tan
						</Text>
					</GridItem>
					<GridItem display="flex" flexDirection="column" gap={1}>
						<Box
							w="100%"
							h="129px"
							bg="blue.500"
							borderRadius="lg"
						></Box>
						<Text color="white" fontWeight={600} fontSize="sm">
							Rachelle Tan
						</Text>
					</GridItem>
					<GridItem display="flex" flexDirection="column" gap={1}>
						<Box
							w="100%"
							h="129px"
							bg="blue.500"
							borderRadius="lg"
						></Box>
						<Text color="white" fontWeight={600} fontSize="sm">
							Rachelle Tan
						</Text>
					</GridItem>
					<GridItem display="flex" flexDirection="column" gap={1}>
						<Box
							w="100%"
							h="129px"
							bg="blue.500"
							borderRadius="lg"
						></Box>
						<Text color="white" fontWeight={600} fontSize="sm">
							Rachelle Tan
						</Text>
					</GridItem>
					<GridItem display="flex" flexDirection="column" gap={1}>
						<Box
							w="100%"
							h="129px"
							bg="blue.500"
							borderRadius="lg"
						></Box>
						<Text color="white" fontWeight={600} fontSize="sm">
							Rachelle Tan
						</Text>
					</GridItem>
				</Grid>
			</Box>
		</ContentContainer>
	);
};
