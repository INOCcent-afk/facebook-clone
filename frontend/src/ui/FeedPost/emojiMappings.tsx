import { Emoji } from "@/graphql/generated/graphql";
import { Box } from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";
import { FaAngry, FaFrown, FaLaughSquint, FaSurprise } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

interface Props {
	selectedEmoji: Emoji;
}

export const emojiMappings = ({ selectedEmoji }: Props) => {
	const emojiMappings: {
		[key in Emoji]: { icon: JSX.Element };
	} = {
		[Emoji.Like]: {
			icon: (
				<>
					<Box marginTop={-1} color={selectedEmoji ? "brand" : ""}>
						<AiFillLike size={16} />
					</Box>
				</>
			),
		},
		[Emoji.Heart]: {
			icon: (
				<>
					<Box marginTop={-1} color="red">
						<IoIosHeart size={16} />
					</Box>
				</>
			),
		},
		[Emoji.Laugh]: {
			icon: (
				<>
					<Box marginTop={-1} color="yellow">
						<FaLaughSquint size={16} />
					</Box>
				</>
			),
		},
		[Emoji.Suprise]: {
			icon: (
				<>
					<Box marginTop={-1} color="yellow">
						<FaSurprise size={16} />
					</Box>
				</>
			),
		},
		[Emoji.Cry]: {
			icon: (
				<>
					<Box marginTop={-1} color="yellow">
						<FaFrown size={16} />
					</Box>
				</>
			),
		},
		[Emoji.Angry]: {
			icon: (
				<>
					<Box marginTop={-1} color="orange">
						<FaAngry size={16} />
					</Box>
				</>
			),
		},
	};

	return <>{emojiMappings[selectedEmoji].icon}</>;
};
