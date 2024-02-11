import { Box, Button, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { Reactions } from "../Reactions/Reactions";
import { Emoji } from "@/graphql/generated/graphql";
import { FaAngry, FaFrown, FaLaughSquint, FaSurprise } from "react-icons/fa";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { IoIosHeart } from "react-icons/io";

interface Props {
	handleReaction: (react: Emoji) => void;
	handleDeleteReaction: () => void;
	selectedEmoji: Emoji | null | undefined;
}

export const ReactionButton: FC<Props> = ({
	handleReaction,
	selectedEmoji,
	handleDeleteReaction,
}) => {
	const [showReaction, setShowReaction] = useState(false);

	const emojiMappings: {
		[key in Emoji]: { icon: JSX.Element };
	} = {
		[Emoji.Like]: {
			icon: (
				<>
					<Box marginTop={-1} color={selectedEmoji ? "brand" : ""}>
						{selectedEmoji ? (
							<AiFillLike size={24} />
						) : (
							<AiOutlineLike size={24} />
						)}
					</Box>
					<Text color={selectedEmoji ? "brand" : ""}>Like</Text>
				</>
			),
		},
		[Emoji.Heart]: {
			icon: (
				<>
					<Box marginTop={-1} color="red">
						<IoIosHeart size={24} />
					</Box>
					<Text color="red">Love</Text>
				</>
			),
		},
		[Emoji.Laugh]: {
			icon: (
				<>
					<Box marginTop={-1} color="yellow">
						<FaLaughSquint size={24} />
					</Box>
					<Text color="yellow">Haha</Text>
				</>
			),
		},
		[Emoji.Suprise]: {
			icon: (
				<>
					<Box marginTop={-1} color="yellow">
						<FaSurprise size={24} />
					</Box>
					<Text color="yellow">Wow</Text>
				</>
			),
		},
		[Emoji.Cry]: {
			icon: (
				<>
					<Box marginTop={-1} color="yellow">
						<FaFrown size={24} />
					</Box>
					<Text color="yellow">Sad</Text>
				</>
			),
		},
		[Emoji.Angry]: {
			icon: (
				<>
					<Box marginTop={-1} color="orange">
						<FaAngry size={24} />
					</Box>
					<Text color="orange">Angry</Text>
				</>
			),
		},
	};

	const renderButton = (emoji: Emoji) => (
		<Button
			key={emoji}
			display="flex"
			alignItems="center"
			variant="unstyled"
			color="gray.600"
			gap={2}
			flexGrow={1}
			position="relative"
			onMouseEnter={() => setShowReaction(true)}
			onMouseLeave={() => setShowReaction(false)}
			onClick={() => {
				selectedEmoji ? handleDeleteReaction() : handleReaction(emoji);
			}}
		>
			{showReaction && <Reactions handleReact={handleReaction} />}

			{emojiMappings[emoji].icon}
		</Button>
	);

	return (
		<>
			{!selectedEmoji && renderButton(Emoji.Like)}

			{selectedEmoji && renderButton(selectedEmoji)}
		</>
	);
};
