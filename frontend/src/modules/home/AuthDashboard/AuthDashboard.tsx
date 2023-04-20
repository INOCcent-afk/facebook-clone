import React from "react";
import { SignInForm, UserCard } from "./ui";
import { Box } from "@chakra-ui/react";
import { MOCK_PROFILE_PICTURE } from "@/utils/ProfilePicture.mock";

export const AuthDashboard = () => {
	return (
		<Box background="gray.50" minHeight="60vw">
			<SignInForm />
			<UserCard imageUrl={MOCK_PROFILE_PICTURE} name="Michael" />
		</Box>
	);
};
