import { useCreateComment } from "@/apiHooks/comment/useCreateComment";
import { useAuth } from "@/contexts";
import {
	Avatar,
	Button,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Input,
} from "@chakra-ui/react";
import React, { FC, FormEvent, useState } from "react";
import { IoIosSend } from "react-icons/io";

interface Props {
	postId: number;
}

export const FeedCommentInput: FC<Props> = ({ postId }) => {
	const { token } = useAuth();

	const [content, setContent] = useState("");

	const { mutate: createComment, isError } = useCreateComment();

	const handleCreateComment = (e: FormEvent<HTMLDivElement>) => {
		e.preventDefault();

		createComment(
			{
				content: content,
				postId: postId,
				token: token ?? "",
			},
			{
				onSuccess: () => {
					setContent("");
				},
				onError: (error) => {
					console.log(error);
				},
			}
		);
	};

	return (
		<Flex as="form" gap={4} onSubmit={handleCreateComment}>
			<Avatar size="sm" />
			<FormControl
				backgroundColor="gray.800"
				borderRadius={16}
				_hover={{
					backgroundColor: "gray.500",
				}}
				isInvalid={isError}
			>
				<FormLabel
					height={10}
					_focusVisible={{
						outline: "none",
					}}
					margin={0}
				>
					<HStack
						width="full"
						height="full"
						position="relative"
						px={4}
					>
						<Input
							variant="unstyled"
							size="sm"
							padding={0}
							placeholder="Write a comment..."
							color="white"
							_placeholder={{
								color: "gray.600",
							}}
							value={content}
							onChange={(e) => setContent(e.currentTarget.value)}
						/>

						<Button
							variant="unstyled"
							minWidth="fit-content"
							color="gray.300"
							fontSize="2xl"
							type="submit"
							isDisabled={Boolean(!content)}
						>
							<IoIosSend />
						</Button>
					</HStack>
				</FormLabel>
			</FormControl>
		</Flex>
	);
};
