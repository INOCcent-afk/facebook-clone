import { ContentContainer } from "@/containers/ContentContainer/ContentContainer";
import { Photo } from "@/graphql/generated/graphql";
import {
	Box,
	BoxProps,
	Flex,
	Grid,
	GridItem,
	Heading,
	Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface Props extends BoxProps {
	photos: (Partial<Photo> | null)[] | null | undefined;
}

export const Photos: FC<Props> = ({ photos, ...restProps }) => {
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
					templateColumns={
						photos?.length ? "repeat(3, 1fr)" : "repeat(1, 1fr)"
					}
					gap={2}
					borderRadius="lg"
					overflow="hidden"
				>
					{photos?.length ? (
						photos.map((photo, index) => (
							<GridItem
								w="100%"
								h="129px"
								bg="blue.500"
								key={index}
								position="relative"
							>
								{photo?.image && (
									<Image
										src={photo.image}
										style={{ objectFit: "cover" }}
										fill
										alt="image"
									/>
								)}
							</GridItem>
						))
					) : (
						<GridItem
							color="gray.600"
							textAlign="center"
							width="full"
						>
							<Text>No Photos</Text>
						</GridItem>
					)}
				</Grid>
			</Box>
		</ContentContainer>
	);
};
