import { Comments, Emoji, Post, Reactions } from "@/graphql/generated/graphql";
import { getFormmatedDate } from "@/utils/getFormmatedDate";
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
} from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import { SharedFeedPost } from "../SharedFeedPost/SharedFeedPost";
import { emojiMappings } from "../FeedPost/emojiMappings";
import { AiFillLike } from "react-icons/ai";

interface Props
	extends Omit<ModalProps, "children" | "id">,
		Pick<
			Post,
			| "images"
			| "id"
			| "postContent"
			| "user"
			| "createdAt"
			| "sharedPost"
		> {
	selectedEmoji: Emoji | null | undefined;
	comments: (Partial<Comments> | null) | null | undefined;
	reactions: (Partial<Reactions> | null) | null | undefined;
}

export const FeedPostModal: FC<Props> = ({
	user,
	createdAt,
	images,
	postContent,
	sharedPost,
	comments,
	selectedEmoji,
	reactions,
	...restProps
}) => {
	return (
		<Modal {...restProps}>
			<ModalOverlay />
			<ModalContent
				paddingBottom={4}
				backgroundColor="gray.700"
				color="white"
				minWidth={650}
			>
				<ModalCloseButton zIndex={1} />
				<ModalHeader textAlign="center" tabIndex={-1}>
					Create Post
				</ModalHeader>
				<Divider />
				<ModalBody>
					<Flex gap={4}>
						<Avatar />
						<Box color="white">
							<Text fontWeight="bold">{`${user?.firstName}  ${user?.lastName}`}</Text>
							<Text fontSize="sm" color="gray.600">
								{getFormmatedDate(createdAt)}
							</Text>
						</Box>
					</Flex>

					<Box marginY={4}>
						<Box color="white">
							<Text fontSize={images?.length ? 16 : 24}>
								{postContent}
							</Text>
						</Box>

						{images?.length ? (
							<Flex
								height={images.length > 1 ? 418 : 642}
								marginTop={2}
								gap={4}
							>
								{images.map((image) => (
									<Box
										position="relative"
										width="full"
										rounded="lg"
										overflow="hidden"
										key={image?.id}
									>
										<Image
											src={`${image?.image}`}
											alt="image"
											fill={true}
											style={{
												objectFit: "cover",
											}}
											blurDataURL={`${image?.image}`}
											placeholder="blur"
										/>
									</Box>
								))}
							</Flex>
						) : null}

						<Box paddingY={2}>
							{sharedPost && (
								<SharedFeedPost
									id={sharedPost.id}
									createdAt={sharedPost.createdAt}
									images={sharedPost.images}
									postContent={sharedPost.postContent}
									user={sharedPost.user}
								/>
							)}
						</Box>
					</Box>

					<Flex paddingBottom={4} justifyContent="space-between">
						{selectedEmoji && (
							<Flex alignItems="center" gap={2}>
								{selectedEmoji ? (
									<Flex gap={1} alignItems="center">
										{emojiMappings({
											selectedEmoji: selectedEmoji,
										})}
									</Flex>
								) : (
									<Box marginTop={-1} color="brand">
										<AiFillLike size={24} />
									</Box>
								)}

								<Text color="gray.300">
									{reactions?.reactionCount}
								</Text>
							</Flex>
						)}

						{comments && comments.totalCount ? (
							<Flex gap={1} color="gray.300">
								<Text>{comments.totalCount}</Text>
								<Text>Comments</Text>
							</Flex>
						) : null}
					</Flex>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
