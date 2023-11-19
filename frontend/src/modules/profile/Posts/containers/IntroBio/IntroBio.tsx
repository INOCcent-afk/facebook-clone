import { MeOnly } from "@/containers/MeOnly/MeOnly";
import { Maybe } from "@/graphql/generated/graphql";
import { ContentContainer } from "@/ui";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
	bio?: string;
	userUid?: Maybe<string>;
}

export const IntroBio: FC<Props> = ({ bio, userUid }) => {
	if (!bio) {
		return null;
	}

	return (
		<ContentContainer>
			<Heading color="white" fontSize="xl" mb={4}>
				Intro
			</Heading>
			<Stack gap={4}>
				{bio && (
					<Text textAlign="center" color="white">
						{bio}
					</Text>
				)}

				<MeOnly uid={userUid}>
					{bio ? (
						<Button variant="lightGray">Edit bio</Button>
					) : (
						<Button variant="lightGray">Add bio</Button>
					)}
				</MeOnly>

				{/* <Button variant="lightGray">Edit details</Button>
				<Button variant="lightGray">Add hobbies</Button>
				<Button variant="lightGray">Add featured</Button> */}
			</Stack>
		</ContentContainer>
	);
};
