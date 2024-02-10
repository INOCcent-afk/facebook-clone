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
import { MediaUpload } from "./ui/MediaUpload";
import { MdPhotoLibrary } from "react-icons/md";
import { FormProvider, useForm } from "react-hook-form";
import { CreatePostForm } from "./types/CreatePostForm";
import { useUploadFiles } from "./hooks/useUploadFiles";

interface Props extends Omit<ModalProps, "children"> {
	userUid: string;
	userFirstName: string;
	userLastName: string;
}

export const CreatePost: FC<Props> = ({
	userUid,
	userFirstName,
	userLastName,
	...restProps
}) => {
	const { token } = useAuth();
	const [isMediaUploadOpen, setIsMediaUploadOpen] = useState(false);

	const methods = useForm<CreatePostForm>({
		defaultValues: {
			content: "",
			files: [],
		},
	});

	const { setValue, watch } = methods;

	const queryClient = useQueryClient();

	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const textarea = textareaRef.current;
		const newContent = e.target.value;
		setValue("content", newContent);

		if (newContent && textarea) {
			textarea.style.height = "auto";
			textarea.style.height = `${textarea.scrollHeight}px`;
		} else if (textarea) {
			textarea.style.height = `${textarea.rows * 24}px`;
		}
	};

	const { handleGenerateUrlsAndStore } = useUploadFiles();
	const { mutate: createPost } = useCreatePost();

	const handleCreatePost = async (e: FormEvent<HTMLDivElement>) => {
		e.preventDefault();

		const awsImages = await handleGenerateUrlsAndStore(watch("files"));

		createPost(
			{
				postContent: watch("content"),
				images: awsImages,
				token: token ?? "",
			},
			{
				onSuccess: async () => {
					setValue("content", "");
					await queryClient.invalidateQueries(["posts"]);
					await queryClient.invalidateQueries([
						"user-posts",
						userUid,
					]);
					restProps.onClose();
				},
				onError: () => {
					console.log("Error");
				},
			}
		);
	};

	return (
		<FormProvider {...methods}>
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
									<Text>
										{userFirstName} {userLastName}
									</Text>
								</Box>
							</Flex>
							<Box
								position="relative"
								height="100%"
								marginBottom={4}
							>
								<Textarea
									ref={textareaRef}
									value={watch("content")}
									onChange={handleInputChange}
									placeholder={`What's on your mind, ${userFirstName}?`}
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

							{isMediaUploadOpen && (
								<MediaUpload
									toggleMediaUpload={setIsMediaUploadOpen}
								/>
							)}

							<Flex
								justifyContent="space-between"
								alignItems="center"
								backgroundColor="gray.800"
								rounded="md"
								paddingLeft={4}
								paddingRight={2}
								paddingY={2}
								marginY={2}
							>
								<Text>Add to your post</Text>
								<Button
									variant="circledButton"
									onClick={() => setIsMediaUploadOpen(true)}
								>
									<Text color="green.400">
										<MdPhotoLibrary
											size={28}
											aria-label="add photo"
										/>
									</Text>
								</Button>
							</Flex>

							<Button
								type="submit"
								width="full"
								isDisabled={Boolean(!watch("content"))}
							>
								Post
							</Button>
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</FormProvider>
	);
};
