import { useCreatePost } from "@/apiHooks/post/useCreatePost";
import { useAuth } from "@/contexts";
import {
	Avatar,
	Box,
	Button,
	Divider,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	ModalProps,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import React, { ChangeEvent, FC, useRef, useState, FormEvent } from "react";

interface Props extends Omit<ModalProps, "children"> {
	userUid: string;
}

export const CreatePost: FC<Props> = ({ userUid, ...restProps }) => {
	const { token } = useAuth();
	const [content, setContent] = useState("");

	const queryClient = useQueryClient();

	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const textarea = textareaRef.current;
		const newContent = e.target.value;
		setContent(newContent);

		if (newContent && textarea) {
			textarea.style.height = "auto";
			textarea.style.height = `${textarea.scrollHeight}px`;
		} else if (textarea) {
			textarea.style.height = `${textarea.rows * 24}px`;
		}
	};

	const { mutate: createPost } = useCreatePost();

	const handleCreatePost = (e: FormEvent<HTMLDivElement>) => {
		e.preventDefault();

		createPost(
			{
				postContent: content,
				token: token ?? "",
			},
			{
				onSuccess: async () => {
					setContent("");
					queryClient.invalidateQueries(["posts", `user-${userUid}`]);
					restProps.onClose();
				},
				onError: () => {
					console.log("Error");
				},
			}
		);
	};

	return (
		<Modal isCentered {...restProps}>
			<ModalOverlay />
			<ModalContent
				paddingBottom={4}
				backgroundColor="gray.700"
				color="white"
			>
				<ModalCloseButton zIndex={1} />
				<ModalHeader textAlign="center" tabIndex={-1}>
					Create Post
				</ModalHeader>
				<Divider />
				<ModalBody paddingX={4} paddingY={4}>
					<Box as="form" onSubmit={handleCreatePost}>
						<Flex gap={3}>
							<Avatar />
							<Box>
								<Text>Michael Dave</Text>
							</Box>
						</Flex>
						<Box position="relative" height="100%" marginBottom={4}>
							<Textarea
								ref={textareaRef}
								value={content}
								onChange={handleInputChange}
								placeholder="What's on your mind, Michael?"
								variant="unstyled"
								resize="none"
								outline="none"
								top={0}
								bottom={0}
								left={0}
								spellCheck={false}
								maxHeight={600}
								tabIndex={0}
							/>
						</Box>
						<Button
							type="submit"
							width="full"
							isDisabled={Boolean(!content)}
						>
							Post
						</Button>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
