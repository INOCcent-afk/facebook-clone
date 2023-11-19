import { OtherUserOnly } from "@/containers/OtherUserOnly/OtherUserOnly";
import { Button, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { RiPencilFill } from "react-icons/ri";

interface Props {
	userUid: string | undefined;
}

export const FriendControls: FC<Props> = ({ userUid }) => {
	return (
		<OtherUserOnly uid={userUid}>
			<Button>
				<Text as="span" color="white" mr={1}>
					<HiOutlinePlusSm size={18} />
				</Text>{" "}
				Add to story
			</Button>
			<Button variant="lightGray">
				<Text as="span" color="white" mr={2}>
					<RiPencilFill size={18} />
				</Text>
				Edit profile
			</Button>
		</OtherUserOnly>
	);
};
