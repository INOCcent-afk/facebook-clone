import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { ContentContainer } from "../../containers/ContentContainer/ContentContainer";
import { Post } from "@/graphql/generated/graphql";
import Image from "next/image";

interface Props
	extends Pick<
		Post,
		"images" | "id" | "postContent" | "user" | "createdAt"
	> {}

export const SharedFeedPost: FC<Props> = ({
	images,
	postContent,
	id,
	user,
	createdAt,
}) => {
	if (id && !createdAt)
		return (
			<ContentContainer border="1px" borderColor="gray.500">
				<Box>
					<Text>Post has been deleted</Text>
				</Box>
			</ContentContainer>
		);

	const date = new Date(createdAt);

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const month = months[date.getMonth()];
	const day = date.getDate();
	const hours = date.getHours() % 12 || 12;
	const minutes = ("0" + date.getMinutes()).slice(-2);
	const ampm = date.getHours() < 12 ? "AM" : "PM";

	const formattedDate = `${month} ${day} at ${hours}:${minutes} ${ampm}`;

	return (
		<ContentContainer border="1px" borderColor="gray.500">
			<Flex justifyContent="space-between">
				<Flex gap={4}>
					<Avatar />
					<Box color="white">
						<Text fontWeight="bold">{`${user?.firstName}  ${user?.lastName}`}</Text>
						<Text fontSize="sm" color="gray.600">
							{formattedDate}
						</Text>
					</Box>
				</Flex>
			</Flex>

			<Box marginY={4}>
				<Box color="white">
					<Text fontSize={images?.length ? 15 : 24}>
						{postContent}
					</Text>
				</Box>

				{images?.length ? (
					<Flex
						height={images.length > 1 ? 418 : 642}
						marginTop={2}
						gap={4}
					>
						{images.map((image) => (
							<Box
								position="relative"
								width="full"
								rounded="lg"
								overflow="hidden"
								key={image?.id}
							>
								<Image
									src={`${image?.image}`}
									alt="image"
									fill={true}
									style={{
										objectFit: "cover",
									}}
									blurDataURL={`${image?.image}`}
									placeholder="blur"
								/>
							</Box>
						))}
					</Flex>
				) : null}
			</Box>
		</ContentContainer>
	);
};
