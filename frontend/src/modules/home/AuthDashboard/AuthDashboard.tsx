import React from "react";
import { AuthDashboardFooter, SignInForm, UserCard } from "./ui";
import { Box, HStack, Text, VStack, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { MOCK_FACEBOOK_LOGO, MOCK_PROFILE_PICTURE } from "@/utils";
import { useForm, FormProvider } from "react-hook-form";
import { AuthFormState } from "./types/state";
import { SignUpForm } from "./ui/SignUpForm/SignUpForm";

export const AuthDashboard = () => {
	//
	const methods = useForm<AuthFormState>({
		defaultValues: {
			signInEmail: "",
			signInPassword: "",

			firstName: "",
			lastName: "",
			signUpEmail: "",
			signUpPassword: "",
			confirmPassword: "",
		},
	});

	const {
		isOpen: isSignUpFormOpen,
		onClose: closeSignUpForm,
		onOpen: openSignUpForm,
	} = useDisclosure();

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
									blurDataURL={MOCK_FACEBOOK_LOGO}
									placeholder="blur"
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

					<SignInForm openSignUpForm={openSignUpForm} />
				</HStack>
			</Box>

			<AuthDashboardFooter />

			<SignUpForm isOpen={isSignUpFormOpen} onClose={closeSignUpForm} />
		</FormProvider>
	);
};
