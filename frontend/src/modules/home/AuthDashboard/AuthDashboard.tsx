import React from "react";
import { AuthDashboardFooter, SignInForm, UserCard } from "./ui";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { MOCK_PROFILE_PICTURE } from "@/utils/profilePicture.mock";
import Image from "next/image";
import { MOCK_FACEBOOK_LOGO } from "@/utils/facebookLogo.mock";
import { useForm, FormProvider } from "react-hook-form";

interface AuthFormState {
	email: string;
	password: string;
}

export const AuthDashboard = () => {
	const methods = useForm<AuthFormState>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	return (
		<FormProvider {...methods}>
			<Box backgroundColor="gray.50" minHeight="800px" height="full">
				<HStack
					paddingY={100}
					justifyContent="space-between"
					maxW={1000}
					marginX="auto"
					alignItems="center"
					height="full"
				>
					<Box>
						<VStack
							gap={2}
							alignItems="flex-start"
							marginBottom={4}
						>
							<Box margin="-20px">
								<Image
									src={MOCK_FACEBOOK_LOGO}
									alt="facebook logo"
									width={200}
									height={70}
								/>
							</Box>

							<Box>
								<Text as="h4" fontSize="2xl">
									Recent Logins
								</Text>
								<Text color="gray">
									Click your picture or add an account
								</Text>
							</Box>
						</VStack>

						<HStack>
							<UserCard
								type="user"
								imageUrl={MOCK_PROFILE_PICTURE}
								name="Michael"
							/>
							<UserCard type="add_account" />
						</HStack>
					</Box>

					<SignInForm />
				</HStack>
			</Box>

			<AuthDashboardFooter />
		</FormProvider>
	);
};
