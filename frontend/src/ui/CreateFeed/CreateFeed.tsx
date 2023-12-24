import { MOCK_PROFILE_PICTURE } from "@/utils";
import {
	Avatar,
	Button,
	Divider,
	HStack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React, { FC, Dispatch, SetStateAction } from "react";
import { MdPhotoLibrary } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";
import { ContentContainer } from "../../containers/ContentContainer/ContentContainer";
import { CreatePost } from "../CreatePost/CreatePost";
import { MyLatestPost } from "@/models/post";
import { MeOnly } from "@/containers/MeOnly/MeOnly";

interface Props {
	myLatestPosts: MyLatestPost[];
	setMyLatestPosts: Dispatch<SetStateAction<MyLatestPost[]>>;
	userUid: string;
}

export const CreateFeed: FC<Props> = ({
	setMyLatestPosts,
	myLatestPosts,
	userUid,
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
						What&apos;s on your mind, Michael?
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
				setMyLatestPosts={setMyLatestPosts}
				myLatestPosts={myLatestPosts}
			/>
		</MeOnly>
	);
};
