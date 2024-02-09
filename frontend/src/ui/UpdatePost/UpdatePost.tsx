import { useUpdatePost } from "@/apiHooks/post/useUpdatePost";
import { useAuth } from "@/contexts";
import { Post } from "@/graphql/generated/graphql";
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

interface Props
	extends Omit<ModalProps, "children" | "id">,
		Pick<Post, "images" | "postContent" | "id"> {}

export const UpdatePost: FC<Props> = ({
	id,
	images,
	postContent,
	...restProps
}) => {
	const { token, user } = useAuth();
	const [content, setContent] = useState(postContent);

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

	const { mutate: updatePost } = useUpdatePost();

	const handleUpdatePost = (e: FormEvent<HTMLDivElement>) => {
		e.preventDefault();

		updatePost(
			{
				post: {
					id,
					images,
					postContent: content,
				},
				token: token ?? "",
			},
			{
				onSuccess: async () => {
					await queryClient.invalidateQueries(["posts"]);

					restProps.onClose();
					console.log("sucess");
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
				<ModalHeader textAlign="center">Create Post</ModalHeader>
				<Divider />
				<ModalBody paddingX={4} paddingY={4}>
					<Box as="form" onSubmit={handleUpdatePost}>
						<Flex gap={3}>
							<Avatar />
							<Box>
								<Text>{`${user?.firstName} ${user?.lastName}`}</Text>
							</Box>
						</Flex>
						<Box position="relative" height="100%" marginBottom={4}>
							<Textarea
								ref={textareaRef}
								value={content as string}
								onChange={handleInputChange}
								placeholder={`What's on your mind, ${user?.firstName}?`}
								variant="unstyled"
								resize="none"
								outline="none"
								top={0}
								bottom={0}
								left={0}
								spellCheck={false}
								maxHeight={600}
							/>
						</Box>
						<Button
							type="submit"
							width="full"
							isDisabled={Boolean(!content)}
						>
							Save
						</Button>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
