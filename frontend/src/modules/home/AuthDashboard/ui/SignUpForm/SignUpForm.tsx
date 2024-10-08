import {
	Box,
	Button,
	FormControl,
	HStack,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	ModalProps,
	Text,
	VStack,
} from "@chakra-ui/react";
import React, { FC, FormEvent } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { AuthFormState } from "../../types/state";
import { useRegisterUser } from "@/apiHooks/user/useRegisterUser";

interface Props extends Omit<ModalProps, "children"> {}

export const SignUpForm: FC<Props> = ({ ...restProps }) => {
	const { control, register, reset } = useFormContext<AuthFormState>();

	const { mutate: registerUser, isLoading: isRegisteringUser } =
		useRegisterUser();

	const { signUpEmail, signUpPassword, firstName, lastName } = useWatch({
		control,
	});

	const signup = (e: FormEvent<HTMLDivElement>) => {
		e.preventDefault();

		registerUser(
			{
				firstName,
				lastName,
				username: `${firstName}${lastName}`,
				password: signUpPassword,
				email: signUpEmail,
			},
			{
				onSuccess: () => {
					console.log("success");
					restProps.onClose();
					reset();
				},
				onError: () => {
					console.log("error");
				},
			}
		);
	};

	return (
		<Modal isCentered {...restProps}>
			<ModalOverlay />

			<ModalContent paddingBottom={8}>
				<ModalCloseButton zIndex={1} />

				<ModalBody>
					<Box as="form" onSubmit={signup}>
						<FormControl backgroundColor="white">
							<Box
								py={2}
								borderBottomWidth={1}
								borderBottomColor="gray.300"
							>
								<Heading fontSize="2xl">Sign Up</Heading>
								<Text fontSize="sm">Quick and easy</Text>
							</Box>

							<VStack py={4}>
								<HStack width="full">
									<Input
										type="text"
										placeholder="First name"
										variant="gray"
										required
										{...register("firstName")}
									/>
									<Input
										type="text"
										placeholder="Last name"
										variant="gray"
										required
										{...register("lastName")}
									/>
								</HStack>
								<Input
									type="email"
									placeholder="Email"
									variant="gray"
									required
									{...register("signUpEmail")}
								/>
								<Input
									type="password"
									placeholder="Password"
									variant="gray"
									required
									{...register("signUpPassword")}
								/>
								<Input
									type="password"
									placeholder="Confirm Password"
									variant="gray"
									required
									{...register("confirmPassword")}
								/>
							</VStack>
						</FormControl>

						<Button
							variant="secondary"
							marginX="auto"
							display="block"
							type="submit"
							isLoading={isRegisteringUser}
						>
							Sign Up
						</Button>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
