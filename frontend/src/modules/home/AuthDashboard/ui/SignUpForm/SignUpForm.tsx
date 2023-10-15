import {
	Box,
	FormControl,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	ModalProps,
	VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { AuthFormState } from "../../types/state";

interface Props extends Omit<ModalProps, "children"> {}

export const SignUpForm: FC<Props> = ({ ...restProps }) => {
	const { register } = useFormContext<AuthFormState>();

	return (
		<Modal isCentered {...restProps}>
			<ModalOverlay />

			<ModalContent paddingTop={10} paddingBottom={8}>
				<ModalCloseButton />

				<ModalBody>
					<Box as="form">
						<FormControl backgroundColor="white">
							<VStack gap={4}>
								<VStack width="full">
									<Input
										type="email"
										placeholder="Email"
										variant="gray"
										{...register("email")}
									/>
									<Input
										type="password"
										placeholder="Password"
										variant="gray"
										{...register("password")}
									/>
								</VStack>
							</VStack>
						</FormControl>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
