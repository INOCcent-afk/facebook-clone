import { MeOnly } from "@/containers/MeOnly/MeOnly";
import { OtherUserOnly } from "@/containers/OtherUserOnly/OtherUserOnly";
import {
	Avatar,
	Box,
	BoxProps,
	Button,
	Divider,
	Flex,
	Heading,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { ChangeEvent, FC, ReactNode } from "react";
import { HiChevronDown, HiDotsHorizontal } from "react-icons/hi";
import { EditProfileControls } from "../EditProfileControls/EditProfileControls";
import { FriendControls } from "../FriendControls/FriendControls";
import { useProfileStore } from "../../stores/useProfileStore";
import { useUpdateProfile } from "@/apiHooks/profile/useUpdateProfile";
import { useAuth } from "@/contexts";
import { useUploadFiles } from "@/ui/CreatePost/hooks/useUploadFiles";
import { MdOutlineCameraAlt } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
	friendsCount: number;
	fullName: string;
	userUid?: string | null;
	isFriends: boolean;
	isInFriendRequests: boolean;
	isRequestingToBeFriend: boolean;
	profilePicture?: string | null;

	postsPanel: ReactNode;
	aboutPanel: ReactNode;
	friendsPanel: ReactNode;
}

export const ProfileHeader: FC<Props> = ({
	friendsCount,
	fullName,
	userUid,
	postsPanel,
	aboutPanel,
	friendsPanel,
	isFriends,
	isInFriendRequests,
	isRequestingToBeFriend,
	profilePicture,
}) => {
	const { token } = useAuth();

	const {
		newCoverPhoto,
		isEditorMode,
		updateEditorMode,
		newProfilePicture,
		updateNewProfilePicture,
		resetProfileStore,
	} = useProfileStore();
	const { mutate: updateProfile } = useUpdateProfile();

	const { handleGenerateUrlAndStore } = useUploadFiles();

	const queryClient = useQueryClient();

	const handleEditProfile = () => {
		updateEditorMode(!isEditorMode);
	};

	const handleSaveProfile = async () => {
		let newUploadedCoverPhoto;
		let newUploadedProfilePicture;

		if (newCoverPhoto) {
			newUploadedCoverPhoto = await handleGenerateUrlAndStore(
				newCoverPhoto
			);
		}

		if (newProfilePicture) {
			newUploadedProfilePicture = await handleGenerateUrlAndStore(
				newProfilePicture
			);
		}

		updateProfile(
			{
				coverPhoto: newUploadedCoverPhoto,
				profilePicture: newUploadedProfilePicture,
				token: token ?? "",
			},
			{
				onSuccess: async () => {
					await queryClient.invalidateQueries(["me"]);
				},
				onError: (error) => {
					console.log(error);
				},
			}
		);

		resetProfileStore();
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const MAX_LENGTH = 1;

		if (e.target.files) {
			if (Array.from(e.target.files).length > MAX_LENGTH) {
				alert(`Cannot upload files more than ${MAX_LENGTH}`);
			} else {
				const files: FileList = e.target.files;
				const imageFiles: File[] = Array.from(files).filter((file) =>
					file.type.startsWith("image/")
				);

				updateNewProfilePicture(imageFiles[0]);
			}
		}
	};

	const containerStyle: BoxProps = {
		maxWidth: 1250,
		mx: "auto",
		px: 8,
	};

	const getImage = () => {
		if (isEditorMode && newProfilePicture) {
			return URL.createObjectURL(newProfilePicture);
		}

		return profilePicture;
	};

	return (
		<Box>
			<Flex {...containerStyle} justifyContent="space-between">
				<Box display="flex" textColor="white" gap={4}>
					<Box
						position="relative"
						mt={-10}
						height="fit-content"
						overflow="hidden"
						rounded="full"
					>
						<Avatar src={`${getImage()}`} size="2xl" />

						{isEditorMode && (
							<>
								<Input
									type="file"
									accept="image/png, image/jpeg"
									aria-hidden="true"
									height="100%"
									width="100%"
									position="absolute"
									top="0"
									left="0"
									opacity="0"
									appearance="none"
									multiple
									cursor="pointer"
									zIndex={1}
									onChange={handleFileChange}
								></Input>

								<Box
									width="full"
									height="full"
									position="absolute"
									display="flex"
									alignItems="center"
									justifyContent="center"
									backgroundColor="#00000080"
									color="whiteAlpha.600"
									top={0}
									bottom={0}
								>
									<MdOutlineCameraAlt size={30} />
								</Box>
							</>
						)}
					</Box>
					<Box pb={4} pt={6}>
						<Heading fontSize={32}>{fullName}</Heading>
						<Text textColor="gray.600" fontWeight={600}>
							{friendsCount} friends
						</Text>
					</Box>
				</Box>
				<Flex gap={4} py={10}>
					{userUid && (
						<MeOnly uid={userUid}>
							<EditProfileControls
								handleEditProfile={handleEditProfile}
								handleSaveProfile={handleSaveProfile}
								isEditorMode={isEditorMode}
							/>
						</MeOnly>
					)}

					{userUid && (
						<OtherUserOnly uid={userUid}>
							<FriendControls
								isFriends={isFriends}
								isInFriendRequests={isInFriendRequests}
								isRequestingToBeFriend={isRequestingToBeFriend}
								friendName={fullName}
							/>
						</OtherUserOnly>
					)}
				</Flex>
			</Flex>

			<Box {...containerStyle} pb={4}>
				<Divider />
			</Box>

			<Tabs>
				<TabList {...containerStyle} textColor="white" border="none">
					<Tab
						fontWeight={600}
						fontSize={15}
						color="gray.600"
						borderTopLeftRadius="md"
						borderTopRightRadius="md"
						_hover={{
							backgroundColor: "gray.200",
						}}
						_selected={{
							color: "brand",
							borderColor: "brand",
							_selected: {
								backgroundColor: undefined,
							},
						}}
					>
						Posts
					</Tab>
					<Tab
						fontWeight={600}
						fontSize={15}
						color="gray.600"
						borderTopLeftRadius="md"
						borderTopRightRadius="md"
						_hover={{
							backgroundColor: "gray.200",
						}}
						_selected={{
							color: "brand",
							borderColor: "brand",
							_selected: {
								backgroundColor: undefined,
							},
						}}
					>
						About
					</Tab>
					<Tab
						fontWeight={600}
						fontSize={15}
						color="gray.600"
						borderTopLeftRadius="md"
						borderTopRightRadius="md"
						_hover={{
							backgroundColor: "gray.200",
						}}
						_selected={{
							color: "brand",
							borderColor: "brand",
							_selected: {
								backgroundColor: undefined,
							},
						}}
					>
						Friends
					</Tab>
					<Tab
						fontWeight={600}
						fontSize={15}
						color="gray.600"
						borderTopLeftRadius="md"
						borderTopRightRadius="md"
						_hover={{
							backgroundColor: "gray.200",
						}}
						_selected={{
							color: "brand",
							borderColor: "brand",
							_selected: {
								backgroundColor: undefined,
							},
						}}
					>
						Photos
					</Tab>
					<Tab
						fontWeight={600}
						fontSize={15}
						color="gray.600"
						borderTopLeftRadius="md"
						borderTopRightRadius="md"
						_hover={{
							backgroundColor: "gray.200",
						}}
						_selected={{
							color: "brand",
							borderColor: "brand",
							_selected: {
								backgroundColor: undefined,
							},
						}}
					>
						Videos
					</Tab>
					<Tab
						fontWeight={600}
						fontSize={15}
						color="gray.600"
						borderTopLeftRadius="md"
						borderTopRightRadius="md"
						_hover={{
							backgroundColor: "gray.200",
						}}
						_selected={{
							color: "brand",
							borderColor: "brand",
							_selected: {
								backgroundColor: undefined,
							},
						}}
					>
						Reels
					</Tab>

					<Menu>
						<MenuButton
							as={Button}
							rightIcon={<HiChevronDown />}
							variant="unstyled"
							py="10px !important"
							px="16px !important"
							alignItems="center"
							display="flex"
							fontWeight={600}
							color="gray.600"
							fontSize={15}
						>
							More
						</MenuButton>
						<MenuList backgroundColor="black">
							<MenuItem backgroundColor="black">
								<Link href="/">Download</Link>
							</MenuItem>
							<MenuItem backgroundColor="black">
								<Link href="/">Download</Link>
							</MenuItem>
							<MenuItem backgroundColor="black">
								<Link href="/">Download</Link>
							</MenuItem>
							<MenuItem backgroundColor="black">
								<Link href="/">Download</Link>
							</MenuItem>
							<MenuItem backgroundColor="black">
								<Link href="/">Download</Link>
							</MenuItem>
						</MenuList>
					</Menu>

					<Menu>
						<MenuButton as={Button} ml="auto" variant="lightGray">
							<HiDotsHorizontal size={18} />
						</MenuButton>
						<MenuList backgroundColor="black">
							<MenuItem backgroundColor="black">
								<Link href="/">Download</Link>
							</MenuItem>
							<MenuItem backgroundColor="black">
								<Link href="/">Download</Link>
							</MenuItem>
							<MenuItem backgroundColor="black">
								<Link href="/">Download</Link>
							</MenuItem>
							<MenuItem backgroundColor="black">
								<Link href="/">Download</Link>
							</MenuItem>
							<MenuItem backgroundColor="black">
								<Link href="/">Download</Link>
							</MenuItem>
						</MenuList>
					</Menu>
				</TabList>

				<TabPanels>
					<TabPanel px={0} pb={0}>
						<Box backgroundColor="gray.900">
							<Box {...containerStyle} pt={4}>
								{postsPanel}
							</Box>
						</Box>
					</TabPanel>
					<TabPanel px={0}>
						<Box minHeight={1000} backgroundColor="gray.900">
							<Box {...containerStyle} pt={4}>
								{aboutPanel}
							</Box>
						</Box>
					</TabPanel>
					<TabPanel px={0}>
						<Box minHeight={1000} backgroundColor="gray.900">
							<Box {...containerStyle} pt={4}>
								{friendsPanel}
							</Box>
						</Box>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};
