import { Button, Divider, FormControl, Input, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";

export const SignInForm = () => {
	useEffect(() => {});
	return (
		<FormControl
			maxW={396}
			backgroundColor="white"
			shadow="0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)"
			borderRadius="md"
			paddingTop={4}
			paddingBottom={8}
			paddingX={4}
		>
			<VStack gap={4}>
				<VStack width="full">
					<Input type="text" placeholder="Email" variant="gray" />
					<Input
						type="password"
						placeholder="Password"
						variant="gray"
					/>
				</VStack>
				<Button size="lg" width="full" type="submit">
					Log in
				</Button>
				<Divider />
				<Button size="lg" variant="secondary">
					Create new account
				</Button>
			</VStack>
		</FormControl>
	);
};
