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
import { LabelledAction } from "@/ui";
import { useSocket } from "@/contexts/SocketContext/SocketContext";
import { useMessengerState } from "@/contexts/MessengerContext/MessengerContext";

interface Props {
	isFriends: boolean;
	isInFriendRequests: boolean;
	isRequestingToBeFriend: boolean;
	friendName: string;
}

export const FriendControls: FC<Props> = ({
	isFriends,
	isInFriendRequests,
	isRequestingToBeFriend,
	friendName,
}) => {
	const { user, token } = useAuth();

	const { query } = useRouter();

	const { socket } = useSocket();
	const { handleSetActiveChat } = useMessengerState();

	const friendUserId = query.user_id as string;

	const {
		handleAddFriend,
		handleRejectFriendRequest,
		handleCancelFriendRequest,
		handleConfirmFriendRequest,
		handleUnfriend,
	} = useFriendControls({ token: token ?? "", uid: friendUserId });

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
					<MenuList backgroundColor="gray.700" color="white">
						<MenuItem backgroundColor="gray.700" rounded="sm">
							<LabelledAction
								icon={<SlUserUnfollow size={18} />}
								width="full"
								label="Unfriend"
								labelFontSize="lg"
								onClick={handleUnfriend}
							/>
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

			<Button
				variant={isFriends ? "primary" : "lightGray"}
				onClick={() => {
					if (!socket) return;

					socket?.emit("joinPrivateRoom", user?.uid, friendUserId);
					handleSetActiveChat({ id: friendUserId, name: friendName });
				}}
			>
				<Text as="span" color="white" mr={2}>
					<FaFacebookMessenger size={18} />
				</Text>
				Message
			</Button>
		</>
	);
};
