import { Box, Flex, Text } from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";
import { IoIosHeart } from "react-icons/io";
import { FaLaughSquint } from "react-icons/fa";
import { FaSurprise } from "react-icons/fa";
import { FaFrown } from "react-icons/fa";
import { FaAngry } from "react-icons/fa";
import React, { FC } from "react";
import { Emoji } from "@/graphql/generated/graphql";

interface Props {
	handleReact: (emoji: Emoji) => void;
}

export const Reactions: FC<Props> = ({ handleReact }) => {
	return (
		<Box
			position="absolute"
			top={-10}
			paddingY={2}
			px={4}
			backgroundColor="gray.400"
			borderRadius="3xl"
		>
			<Flex alignItems="center" gap={2}>
				<Box
					backgroundColor="brand"
					padding={1}
					rounded="full"
					onClick={(e) => {
						e.stopPropagation();

						handleReact(Emoji.Like);
					}}
				>
					<Text as="span" color="white" fontSize={16}>
						<AiFillLike />
					</Text>
				</Box>
				<Box
					backgroundColor="red"
					padding={1}
					rounded="full"
					onClick={(e) => {
						e.stopPropagation();

						handleReact(Emoji.Heart);
					}}
				>
					<Text as="span" color="white" fontSize={16}>
						<IoIosHeart />
					</Text>
				</Box>
				<Text
					as="span"
					color="yellow"
					fontSize={24}
					onClick={(e) => {
						e.stopPropagation();

						handleReact(Emoji.Laugh);
					}}
				>
					<FaLaughSquint />
				</Text>
				<Text
					as="span"
					color="yellow"
					fontSize={24}
					onClick={(e) => {
						e.stopPropagation();

						handleReact(Emoji.Suprise);
					}}
				>
					<FaSurprise />
				</Text>
				<Text
					as="span"
					color="yellow"
					fontSize={24}
					onClick={(e) => {
						e.stopPropagation();

						handleReact(Emoji.Cry);
					}}
				>
					<FaFrown />
				</Text>
				<Text
					as="span"
					color="orange"
					fontSize={24}
					onClick={(e) => {
						e.stopPropagation();

						handleReact(Emoji.Angry);
					}}
				>
					<FaAngry />
				</Text>
			</Flex>
		</Box>
	);
};
