import { MOCK_PROFILE_PICTURE } from "@/utils";
import {
	Avatar,
	Button,
	Divider,
	HStack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { MdPhotoLibrary } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";
import { ContentContainer } from "../../containers/ContentContainer/ContentContainer";
import { CreatePost } from "../CreatePost/CreatePost";
import { MeOnly } from "@/containers/MeOnly/MeOnly";

interface Props {
	userUid: string;
	userFirstName: string;
	userLastName: string;
}

export const CreateFeed: FC<Props> = ({
	userUid,
	userFirstName,
	userLastName,
}) => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<MeOnly uid={userUid}>
			<ContentContainer>
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
						onClick={onOpen}
					>
						What&apos;s on your mind, {userFirstName}?
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
			</ContentContainer>
			<CreatePost
				isOpen={isOpen}
				onClose={onClose}
				userUid={userUid}
				userFirstName={`${userFirstName}`}
				userLastName={`${userLastName}`}
			/>
		</MeOnly>
	);
};
