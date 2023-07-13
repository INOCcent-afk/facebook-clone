import { colors } from "@/styles/chakra/theme";
import { MOCK_PROFILE_PICTURE } from "@/utils/profilePicture.mock";
import { Avatar, AvatarBadge, Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { IoAdd } from "react-icons/io5";

interface Props {
	createStory?: boolean;
}

export const Story: FC<Props> = ({ createStory = false }) => {
	return (
		<Box
			borderRadius={4}
			height="200px"
			width="112px"
			backgroundColor="gray"
			position="relative"
			overflow="hidden"
			backgroundSize="cover"
			backgroundRepeat="no-repeat"
			backgroundImage={MOCK_PROFILE_PICTURE}
			display="flex"
			boxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
		>
			{!createStory && (
				<>
					<Box position="absolute" top={2} left={2}>
						<Avatar
							size="sm"
							style={{
								border: "3px solid",
								borderColor: colors.brand,
							}}
						>
							<AvatarBadge boxSize="1em" bg="green.500" />
						</Avatar>
					</Box>

					<Box position="absolute" bottom={2} left={2}>
						<Text fontSize={12} fontWeight="bold" color="white">
							Jerome Carbonell
						</Text>
					</Box>
				</>
			)}

			{createStory && (
				<Box
					backgroundColor="gray.700"
					width="full"
					height={14}
					alignSelf="end"
					position="relative"
					display="flex"
					alignItems="flex-end"
					justifyContent="center"
					paddingBottom={2}
				>
					<Box
						position="absolute"
						backgroundColor="brand"
						width={10}
						height={10}
						display="flex"
						alignItems="center"
						justifyContent="center"
						borderRadius="50%"
						border="2px"
						borderColor="gray.700"
						top={-5}
						left="50%"
						transform="translate(-50%)"
					>
						<IoAdd color="white" fontSize={20} />
					</Box>

					<Text color="white" fontWeight="bold" fontSize="xs">
						Create story
					</Text>
				</Box>
			)}
		</Box>
	);
};
