import { Button, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { RiPencilFill } from "react-icons/ri";

interface Props {
	handleEditProfile: () => void;
	handleSaveProfile: () => void;
	isEditorMode: boolean;
}

export const EditProfileControls: FC<Props> = ({
	isEditorMode,
	handleEditProfile,
	handleSaveProfile,
}) => {
	return (
		<>
			{/* <Button>
				<Text as="span" color="white" mr={1}>
					<HiOutlinePlusSm size={18} />
				</Text>{" "}
				Add to story
			</Button> */}
			{!isEditorMode && (
				<Button variant="lightGray" onClick={handleEditProfile}>
					<Text as="span" color="white" mr={2}>
						<RiPencilFill size={18} />
					</Text>
					Edit profile
				</Button>
			)}

			{isEditorMode && (
				<Button variant="secondary" onClick={handleSaveProfile}>
					Save Profile
				</Button>
			)}
		</>
	);
};
