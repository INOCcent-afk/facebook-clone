import { ContentContainer } from "@/ui";
import { Button, Heading, Stack } from "@chakra-ui/react";
import React from "react";

export const IntroBio = () => {
	return (
		<ContentContainer>
			<Heading color="white" fontSize="xl" mb={4}>
				Intro
			</Heading>
			<Stack gap={4}>
				<Button variant="lightGray">Add bio</Button>
				<Button variant="lightGray">Edit details</Button>
				<Button variant="lightGray">Add hobbies</Button>
				<Button variant="lightGray">Add featured</Button>
			</Stack>
		</ContentContainer>
	);
};
