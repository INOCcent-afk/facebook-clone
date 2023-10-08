import {
	Avatar,
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Input,
	Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { ContentContainer } from "../ContentContainer/ContentContainer";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

interface Props {
	images?: string[];
	lol?: string;
}

export const FeedPost: FC<Props> = ({ images }) => {
	return (
		<ContentContainer>
			<Flex justifyContent="space-between">
				<Flex gap={4}>
					<Avatar />
					<Box color="white">
						<Text fontWeight="bold">Michael Dave</Text>
						<Text fontSize="sm" color="gray.600">
							September 21 at 12:52 PM .
						</Text>
					</Box>
				</Flex>
				<Box>
					<Button variant="circledButton" backgroundColor="gray.700">
						<HiDotsHorizontal size={18} />
					</Button>
				</Box>
			</Flex>

			<Box color="white" marginY={4}>
				<Text fontSize={images?.length ? 15 : 24}>
					Hello Everybody!
				</Text>
			</Box>

			<Box mb={4}>
				<Divider />
				<Flex py={2}>
					<Button
						display="flex"
						alignItems="center"
						variant="unstyled"
						color="gray.600"
						gap={2}
						flexGrow={1}
					>
						<Box marginTop={-1}>
							<AiOutlineLike size={24} />
						</Box>
						<Text>Like</Text>
					</Button>
					<Button
						display="flex"
						alignItems="center"
						variant="unstyled"
						color="gray.600"
						gap={2}
						flexGrow={1}
					>
						<Box>
							<FaRegComment size={22} />
						</Box>
						<Text>Comment</Text>
					</Button>
					<Button
						display="flex"
						alignItems="center"
						variant="unstyled"
						color="gray.600"
						gap={2}
						flexGrow={1}
					>
						<Box>
							<RiShareForwardLine size={24} />
						</Box>
						<Text>Share</Text>
					</Button>
				</Flex>
				<Divider />
			</Box>

			<Flex gap={4}>
				<Avatar size="sm" />
				<FormControl
					backgroundColor="gray.800"
					borderRadius={16}
					_hover={{
						backgroundColor: "gray.500",
					}}
				>
					<FormLabel
						height={10}
						_focusVisible={{
							outline: "none",
						}}
						margin={0}
					>
						<HStack
							width="full"
							height="full"
							position="relative"
							px={4}
						>
							<Input
								variant="unstyled"
								size="sm"
								padding={0}
								placeholder="Write a comment..."
								color="white"
								_placeholder={{
									color: "gray.600",
								}}
							/>
						</HStack>
					</FormLabel>
				</FormControl>
			</Flex>
		</ContentContainer>
	);
};
