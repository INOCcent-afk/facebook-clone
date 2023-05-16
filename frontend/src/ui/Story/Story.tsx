import { MOCK_PROFILE_PICTURE } from "@/utils/profilePicture.mock";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const Story = () => {
	return (
		<Box
			height="200px"
			width="112px"
			backgroundColor="gray"
			borderRadius={4}
			position="relative"
			overflow="hidden"
			backgroundImage={}
		>
			<Image src={MOCK_PROFILE_PICTURE} fill alt="story" />
		</Box>
	);
};
