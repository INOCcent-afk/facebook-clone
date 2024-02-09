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
import React, { FC, ReactNode } from "react";
import { HiChevronDown, HiDotsHorizontal } from "react-icons/hi";
import { EditProfileControls } from "../EditProfileControls/EditProfileControls";
import { FriendControls } from "../FriendControls/FriendControls";

interface Props {
	friendsCount: number;
	fullName: string;
	userUid?: string | null;
	isFriends: boolean;
	isInFriendRequests: boolean;
	isRequestingToBeFriend: boolean;

	postsPanel: ReactNode;
	aboutPanel: ReactNode;
	friendsPanel: ReactNode;
	handleEditProfile: () => void;
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
	handleEditProfile,
}) => {
	const containerStyle: BoxProps = {
		maxWidth: 1250,
		mx: "auto",
		px: 8,
	};

	return (
		<Box>
			<Flex {...containerStyle} justifyContent="space-between">
				<Box display="flex" textColor="white" gap={4}>
					<Avatar size="2xl" mt={-10} />
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
