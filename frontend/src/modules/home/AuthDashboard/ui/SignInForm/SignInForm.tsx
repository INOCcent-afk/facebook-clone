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
import { AuthFormState } from "../../types/state";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface Props {
	openSignUpForm: () => void;
}

export const SignInForm: FC<Props> = ({ openSignUpForm }) => {
	const auth = getAuth();

	const { control, register } = useFormContext<AuthFormState>();

	const { signInEmail, signInPassword } = useWatch({
		control,
	});

	const signin = async (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault();

		if (!signInEmail || !signInPassword) return;

		try {
			await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
		} catch (error) {
			console.log(JSON.stringify(error));
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
							{...register("signInEmail")}
						/>
						<Input
							type="password"
							placeholder="Password"
							variant="gray"
							required
							{...register("signInPassword")}
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
