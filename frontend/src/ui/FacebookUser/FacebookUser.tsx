import { useAuth } from "@/contexts";
import { Friendship } from "@/graphql/generated/graphql";
import { useFriendControls } from "@/modules/profile/Profile/ui/FriendControls/FriendControls.hook";
import {
	Avatar,
	AvatarGroup,
	Button,
	Flex,
	HStack,
	Text,
} from "@chakra-ui/react";
import { Maybe } from "graphql/jsutils/Maybe";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
	friend: Maybe<Friendship>;
}

export const FacebookUser: FC<Props> = ({ friend }) => {
	const { token } = useAuth();

	const { handleRejectFriendRequest, handleConfirmFriendRequest } =
		useFriendControls({ token: token ?? "", uid: friend?.User?.uid ?? "" });

	if (!friend) return null;

	return (
		<Link href="/">
			<Flex gap={4}>
				<Avatar size="lg" />
				<Flex flexDirection="column" width="full">
					<HStack justifyContent="space-between" marginBottom={1}>
						<Text color="white" fontSize="sm" fontWeight="bold">
							{friend.User?.firstName} {friend.User?.lastName}
						</Text>
						<Text fontSize="sm" color="gray.600">
							{friend.createdAt}
						</Text>
					</HStack>
					{/* <HStack marginBottom={2}>
						<AvatarGroup max={2} gap={1}>
							<Avatar
								width={5}
								height={5}
								borderColor="gray.900"
							/>
							<Avatar
								width={5}
								height={5}
								borderColor="gray.900"
							/>
						</AvatarGroup>
						{mutalFriendsCount && 
						<Text fontSize="sm" color="gray.600">
							{mutalFriendsCount} mutual friends
						</Text>
						}
					</HStack> */}
					<HStack>
						<Button
							width="full"
							onClick={handleConfirmFriendRequest}
						>
							Confirm
						</Button>
						<Button
							width="full"
							backgroundColor="gray.400"
							onClick={handleRejectFriendRequest}
						>
							Delete
						</Button>
					</HStack>
				</Flex>
			</Flex>
		</Link>
	);
};
