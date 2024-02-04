import { useUpdateProfile } from "@/apiHooks/profile/useUpdateProfile";
import { ContentContainer } from "@/containers/ContentContainer/ContentContainer";
import { MeOnly } from "@/containers/MeOnly/MeOnly";
import { Maybe } from "@/graphql/generated/graphql";
import {
	Box,
	Button,
	Flex,
	Heading,
	Stack,
	Text,
	Textarea,
} from "@chakra-ui/react";
import React, { ChangeEvent, FC, useState } from "react";

interface Props {
	bio: Maybe<string> | undefined;
	userUid: string;
	token: string | null;
	userFullName: string;
}

export const IntroBio: FC<Props> = ({ bio, userUid, token, userFullName }) => {
	const [displayBio, setDisplayBio] = useState<string | null | undefined>(
		bio
	);
	const [content, setContent] = useState(bio ?? "");
	const [openTextarea, setOpenTextarea] = useState(false);

	const { mutate: saveBio } = useUpdateProfile();

	const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const newContent = e.target.value;
		setContent(newContent);
	};

	const maxLength = 101;

	const handleSaveBio = () => {
		if (!token) return;

		saveBio(
			{ bio: content, token },
			{
				onSuccess: (data) => {
					console.log("success");
					setDisplayBio(data.bio);
					setOpenTextarea(false);
				},
				onError: (error) => {
					console.log(error);
				},
			}
		);
	};

	return (
		<ContentContainer>
			<Heading color="white" fontSize="xl" mb={4}>
				Intro
			</Heading>
			<Stack gap={4}>
				{displayBio && (
					<Text textAlign="center" color="white">
						{displayBio}
					</Text>
				)}

				{!openTextarea && (
					<MeOnly uid={userUid}>
						<Button
							variant="lightGray"
							onClick={() => setOpenTextarea(true)}
						>
							{displayBio ? "Edit bio" : "Add bio"}
						</Button>
					</MeOnly>
				)}

				{openTextarea && (
					<>
						<Box display="flex" flexDirection="column" gap={2}>
							<Textarea
								value={content}
								onChange={handleInputChange}
								backgroundColor="gray.800"
								placeholder={`What's on your mind, ${userFullName}?`}
								variant="unstyled"
								resize="none"
								outline="none"
								top={0}
								bottom={0}
								left={0}
								spellCheck={false}
								maxHeight={600}
								tabIndex={0}
								paddingY={4}
								color="white"
								textAlign="center"
								maxLength={maxLength}
								_placeholder={{
									color: "gray.600",
								}}
							/>
							<Text
								as="span"
								alignSelf="end"
								fontSize="sm"
								color="gray.600"
							>
								{maxLength - content.length} characters
								remaining
							</Text>
						</Box>

						<Flex gap={2} justifyContent="end">
							<Button
								variant="lightGray"
								onClick={() => {
									setContent("");
									setOpenTextarea(false);
								}}
							>
								Cancel
							</Button>
							<Button
								onClick={handleSaveBio}
								isDisabled={Boolean(!content)}
							>
								Save
							</Button>
						</Flex>
					</>
				)}
			</Stack>
		</ContentContainer>
	);
};
