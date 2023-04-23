import React from "react";
import { SignInForm, UserCard } from "./ui";
import { Box, HStack } from "@chakra-ui/react";
import { MOCK_PROFILE_PICTURE } from "@/utils/ProfilePicture.mock";

export const AuthDashboard = () => {
	return (
		<Box background="gray.50" minHeight="800px" height="full">
			<HStack
				paddingY={100}
				justifyContent="space-between"
				maxW={1000}
				marginX="auto"
				alignItems="center"
				height="full"
			>
				<HStack>
					<UserCard
						type="user"
						imageUrl={MOCK_PROFILE_PICTURE}
						name="Michael"
					/>
					<UserCard type="add_account" />
				</HStack>
				<SignInForm />
			</HStack>
		</Box>
	);
};
