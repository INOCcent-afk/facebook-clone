import { OtherUserOnly } from "@/containers/OtherUserOnly/OtherUserOnly";
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

interface Props {
	userUid: string | undefined;
}

export const FriendControls: FC<Props> = ({ userUid }) => {
	console.log(userUid);
	return (
		<OtherUserOnly uid={userUid}>
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
			<Button>
				<Text as="span" color="white" mr={2}>
					<FaFacebookMessenger size={18} />
				</Text>
				Message
			</Button>
		</OtherUserOnly>
	);
};
