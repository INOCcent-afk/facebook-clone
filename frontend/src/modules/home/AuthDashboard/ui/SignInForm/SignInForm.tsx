import {
	Box,
	Button,
	Divider,
	FormControl,
	Input,
	VStack,
} from "@chakra-ui/react";
import { useFormContext, useWatch } from "react-hook-form";
import React, { FC } from "react";
import { useRegisterUser } from "@/apiHooks/user/useRegisterUser";
import { AuthFormState } from "../../types/state";

interface Props {
	openSignUpForm: () => void;
}

export const SignInForm: FC<Props> = ({ openSignUpForm }) => {
	const { control, register } = useFormContext<AuthFormState>();

	const { mutate: registerUser } = useRegisterUser();

	const { email, password } = useWatch({
		control,
	});

	const signin = (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault();

		if (email && password) {
			registerUser(
				{
					firstName: "Mikee",
					lastName: "Inoc",
					username: "MikeeJoan",
					password,
					email,
				},
				{
					onSuccess: () => {
						console.log("suc");
					},
					onError: () => {
						console.log("errir");
					},
				}
			);
		} else {
			console.log("FILL UP BITCH");
		}
	};

	return (
		<Box as="form" onSubmit={signin} maxW={396} width="full">
			<FormControl
				backgroundColor="white"
				shadow="0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)"
				borderRadius="md"
				paddingTop={4}
				paddingBottom={8}
				paddingX={4}
			>
				<VStack gap={4}>
					<VStack width="full">
						<Input
							type="email"
							placeholder="Email"
							variant="gray"
							required
							{...register("email")}
						/>
						<Input
							type="password"
							placeholder="Password"
							variant="gray"
							required
							{...register("password")}
						/>
					</VStack>
					<Button size="lg" width="full" type="submit">
						Log in
					</Button>
					<Divider />
					<Button
						size="lg"
						variant="secondary"
						onClick={openSignUpForm}
					>
						Create new account
					</Button>
				</VStack>
			</FormControl>
		</Box>
	);
};
