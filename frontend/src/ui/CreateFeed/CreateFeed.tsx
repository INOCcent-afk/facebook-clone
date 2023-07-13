import { MOCK_PROFILE_PICTURE } from "@/utils/profilePicture.mock";
import { Avatar, Box, Button, Divider, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { MdPhotoLibrary } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";

export const CreateFeed = () => {
	return (
		<Box backgroundColor="gray.700" borderRadius="md" padding={4}>
			<HStack>
				<Avatar size="md" src={MOCK_PROFILE_PICTURE} />
				<Button
					variant="unstyled"
					textAlign="left"
					backgroundColor="gray.800"
					borderRadius="3xl"
					paddingY={2}
					paddingLeft={4}
					width="full"
					color="gray.600"
				>
					What's on your mind, Michael?
				</Button>
			</HStack>
			<Divider marginY={4} />
			<HStack justifyContent="space-evenly">
				<Button
					color="gray.600"
					variant="unstyled"
					display="flex"
					alignItems="center"
					width="full"
					paddingY={2}
					leftIcon={
						<Text color="green.400">
							<MdPhotoLibrary size={28} />
						</Text>
					}
					_hover={{
						backgroundColor: "gray.800",
					}}
				>
					Photo/video
				</Button>
				<Button
					color="gray.600"
					variant="unstyled"
					display="flex"
					alignItems="center"
					width="full"
					paddingY={2}
					leftIcon={
						<Text color="yellow.400">
							<FaRegSmileBeam size={28} />
						</Text>
					}
					_hover={{
						backgroundColor: "gray.800",
					}}
				>
					Feeling/activity
				</Button>
			</HStack>
		</Box>
	);
};
