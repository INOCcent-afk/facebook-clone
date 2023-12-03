import {
	Button,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { SlUserUnfollow } from "react-icons/sl";
import { IoPersonAdd } from "react-icons/io5";
import { useFriendControls } from "./FriendControls.hook";
import { useAuth } from "@/contexts";
import { useRouter } from "next/router";

interface Props {
	isFriends: boolean;
	isInFriendRequests: boolean;
	isRequestingToBeFriend: boolean;
}

export const FriendControls: FC<Props> = ({
	isFriends,
	isInFriendRequests,
	isRequestingToBeFriend,
}) => {
	const { token } = useAuth();
	const { query } = useRouter();
	const userId = query.user_id as string;

	const {
		handleAddFriend,
		handleRejectFriendRequest,
		handleCancelFriendRequest,
		handleConfirmFriendRequest,
	} = useFriendControls({ token: token ?? "", uid: userId });

	return (
		<>
			{isFriends && (
				<Menu>
					<MenuButton
						as={Button}
						leftIcon={
							<Text as="span" color="white">
								<MdPeopleAlt size={22} />
							</Text>
						}
						variant="lightGray"
					>
						Friends
					</MenuButton>
					<MenuList backgroundColor="gray.700" color="white" px={2}>
						<MenuItem
							backgroundColor="gray.700"
							rounded="sm"
							_hover={{
								backgroundColor: "gray.200",
							}}
						>
							<Link href="/">
								<Flex alignItems="center" gap={4}>
									<Text as="span">
										<SlUserUnfollow size={18} />
									</Text>
									<Text>Unfriend</Text>
								</Flex>
							</Link>
						</MenuItem>
					</MenuList>
				</Menu>
			)}

			{!isFriends && !isInFriendRequests && !isRequestingToBeFriend && (
				<Button
					leftIcon={<IoPersonAdd size={20} />}
					onClick={handleAddFriend}
				>
					Add Friend
				</Button>
			)}

			{isInFriendRequests && (
				<Button
					leftIcon={<IoPersonAdd size={20} />}
					onClick={handleCancelFriendRequest}
				>
					Cancel request
				</Button>
			)}

			{isRequestingToBeFriend && (
				<>
					<Button
						leftIcon={<IoPersonAdd size={20} />}
						onClick={handleConfirmFriendRequest}
					>
						Confirm request
					</Button>
					<Button
						leftIcon={<IoPersonAdd size={20} />}
						onClick={handleRejectFriendRequest}
					>
						Reject request
					</Button>
				</>
			)}

			<Button variant={isFriends ? "primary" : "lightGray"}>
				<Text as="span" color="white" mr={2}>
					<FaFacebookMessenger size={18} />
				</Text>
				Message
			</Button>
		</>
	);
};
