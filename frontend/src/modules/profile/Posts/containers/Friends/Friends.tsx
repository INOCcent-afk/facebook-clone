import { ContentContainer } from "@/containers/ContentContainer/ContentContainer";
import { User } from "@/graphql/generated/graphql";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
	friendsCount: number;
	friends: (Partial<User> | null)[] | null | undefined;
}

export const Friends: FC<Props> = ({ friendsCount, friends, ...restProps }) => {
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
					templateColumns={
						friends?.length ? "repeat(3, 1fr)" : "repeat(1, 1fr)"
					}
					rowGap={4}
					columnGap={2}
					borderRadius="lg"
					overflow="hidden"
				>
					{friends?.length ? (
						friends.map((friend) => (
							<GridItem
								display="flex"
								flexDirection="column"
								gap={1}
							>
								<Box
									w="100%"
									h="129px"
									bg="blue.500"
									borderRadius="lg"
								></Box>
								<Text
									color="white"
									fontWeight={600}
									fontSize="sm"
								>
									{friend?.firstName} {friend?.lastName}
								</Text>
							</GridItem>
						))
					) : (
						<GridItem
							color="gray.600"
							textAlign="center"
							width="full"
						>
							<Text>No Friends</Text>
						</GridItem>
					)}
				</Grid>
			</Box>
		</ContentContainer>
	);
};
