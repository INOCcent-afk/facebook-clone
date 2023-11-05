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
import React, { ChangeEvent, FC, useRef, useState } from "react";

interface Props extends Omit<ModalProps, "children"> {}

export const CreatePost: FC<Props> = ({ ...restProps }) => {
	const [content, setContent] = useState("");

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
					<Box as="form">
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
							/>
						</Box>
						<Button width="full" isDisabled={Boolean(!content)}>
							Post
						</Button>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
