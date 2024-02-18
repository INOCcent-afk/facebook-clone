import {
	Avatar,
	Box,
	Button,
	Divider,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { ContentContainer } from "../../containers/ContentContainer/ContentContainer";
import { HiDotsHorizontal } from "react-icons/hi";

import { RiShareForwardLine } from "react-icons/ri";
import { useDeletePost } from "@/apiHooks/post/useDeletePost";
import { useAuth } from "@/contexts";
import { Emoji, Post } from "@/graphql/generated/graphql";
import { MeOnly } from "@/containers/MeOnly/MeOnly";
import { ConfirmationModal } from "../Modals/ConfirmationModal/ConfirmationModal";
import { UpdatePost } from "../UpdatePost/UpdatePost";
import { SharePost } from "../SharePost/SharePost";
import { SharedFeedPost } from "../SharedFeedPost/SharedFeedPost";
import Image from "next/image";
import { useDeleteReaction } from "@/apiHooks/reaction/useDeleteReaction";
import { useCreateReaction } from "@/apiHooks/reaction/useCreateReaction";
import { useReactions } from "@/apiHooks/reaction/useReactions";
import { ReactionButton } from "../ReactionButton/ReactionButton";
import { FaRegComment } from "react-icons/fa";
import { FeedCommentInput } from "../FeedCommentInput/FeedCommentInput";
import { emojiMappings } from "./emojiMappings";
import { AiFillLike } from "react-icons/ai";
import { useComments } from "@/apiHooks/comment/useComments";
import { FeedPostModal } from "../FeedPostModal/FeedPostModal";
import { getFormmatedDate } from "@/utils/getFormmatedDate";

interface Props
	extends Pick<
		Post,
		"images" | "id" | "postContent" | "user" | "createdAt" | "sharedPost"
	> {}

export const FeedPost: FC<Props> = (props) => {
	const { images, postContent, id, user, createdAt, sharedPost } = props;

	const { token } = useAuth();

	const { mutate: deletePost } = useDeletePost();

	const { data: reactions } = useReactions({
		postId: id,
		token: token ?? "",
		enabled: Boolean(token),
	});

	const { data: comments } = useComments({
		enabled: Boolean(token),
		postId: Number(id),
		token: token ?? "",
	});

	const [isDeleted, setIsDelete] = useState(false);

	const {
		isOpen: isConfirmationModalOpen,
		onOpen: openConfirmationModal,
		onClose: closeConfirmationModal,
	} = useDisclosure();

	const {
		isOpen: isUpdatePostModalOpen,
		onOpen: openUpdatePostModal,
		onClose: closeUpdatePostModal,
	} = useDisclosure();

	const {
		isOpen: isSharePostModalOpen,
		onOpen: openSharePostModal,
		onClose: closeSharePostModal,
	} = useDisclosure();

	const handleDeletePost = () => {
		if (!token) return;

		deletePost(
			{
				token: token,
				id,
			},
			{
				onSuccess: () => {
					setIsDelete(true);
					console.log("sucess");
				},
				onError: () => {
					console.log("error");
				},
			}
		);
	};

	const { mutate: deleteReaction } = useDeleteReaction();
	const { mutate: createReaction } = useCreateReaction();

	const [selectedEmoji, setSelectedEmoji] = useState<
		Emoji | null | undefined
	>(null);

	const handleReaction = (react: Emoji) => {
		if (!selectedEmoji && react === Emoji.Like) {
			createReaction(
				{ postId: id, emoji: Emoji.Like, token: token ?? "" },
				{
					onSuccess: () => {
						setSelectedEmoji(Emoji.Like);
					},
				}
			);

			return;
		}

		createReaction(
			{ postId: id, emoji: react, token: token ?? "" },
			{
				onSuccess: () => {
					setSelectedEmoji(react);
				},
			}
		);
	};

	const handleDeleteReaction = () => {
		deleteReaction(
			{ postId: id, token: token ?? "" },
			{
				onSuccess: () => {
					setSelectedEmoji(null);
				},
			}
		);
	};

	useEffect(() => {
		setSelectedEmoji(reactions?.selectedEmoji);
	}, [reactions]);

	const {
		isOpen: isFeedPostModalOpen,
		onClose: closeFeedPostModal,
		onOpen: openFeedPostModal,
	} = useDisclosure();

	return isDeleted ? null : (
		<>
			<UpdatePost
				isOpen={isUpdatePostModalOpen}
				onClose={closeUpdatePostModal}
				id={id}
				images={images}
				postContent={postContent}
			/>

			<ConfirmationModal
				isOpen={isConfirmationModalOpen}
				handleConfirm={handleDeletePost}
				title="Are you sure you want to delete this post?"
				onClose={closeConfirmationModal}
			/>

			<SharePost
				isOpen={isSharePostModalOpen}
				onClose={closeSharePostModal}
				sharePostId={Number(id)}
			/>

			<FeedPostModal
				isOpen={isFeedPostModalOpen}
				onClose={closeFeedPostModal}
				comments={comments}
				reactions={reactions}
				selectedEmoji={selectedEmoji}
				{...props}
			/>

			<ContentContainer>
				<Flex justifyContent="space-between">
					<Flex gap={4}>
						<Avatar />
						<Box color="white">
							<Text fontWeight="bold">{`${user?.firstName}  ${user?.lastName}`}</Text>
							<Text fontSize="sm" color="gray.600">
								{getFormmatedDate(createdAt)}
							</Text>
						</Box>
					</Flex>

					{user?.uid && (
						<Box>
							<MeOnly uid={user.uid}>
								<Menu>
									<MenuButton
										variant="circledButton"
										backgroundColor="gray.700"
										as={Button}
									>
										<HiDotsHorizontal
											size={18}
											style={{
												width: "100%",
											}}
										/>
									</MenuButton>
									<MenuList
										backgroundColor="gray.700"
										border="none"
										boxShadow="0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)"
										px={2}
									>
										<MenuItem
											backgroundColor="gray.700"
											color="white"
											borderRadius="md"
											_hover={{
												backgroundColor: "gray.800",
											}}
											onClick={openUpdatePostModal}
										>
											Edit
										</MenuItem>
										<MenuItem
											backgroundColor="gray.700"
											color="white"
											borderRadius="md"
											_hover={{
												backgroundColor: "gray.800",
											}}
											onClick={openConfirmationModal}
										>
											Delete
										</MenuItem>
									</MenuList>
								</Menu>
							</MeOnly>
						</Box>
					)}
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
						<Flex
							as={Button}
							variant="unstyled"
							gap={1}
							color="gray.300"
							_hover={{
								textDecoration: "underline",
							}}
							onClick={openFeedPostModal}
						>
							<Text>{comments.totalCount}</Text>
							<Text>Comments</Text>
						</Flex>
					) : null}
				</Flex>

				<Box mb={4}>
					<Divider />
					<Flex py={2}>
						<ReactionButton
							handleReaction={handleReaction}
							selectedEmoji={selectedEmoji}
							handleDeleteReaction={handleDeleteReaction}
						/>

						<Button
							display="flex"
							alignItems="center"
							variant="unstyled"
							color="gray.600"
							gap={2}
							flexGrow={1}
						>
							<Box>
								<FaRegComment size={22} />
							</Box>
							<Text>Comment</Text>
						</Button>
						<Button
							display="flex"
							alignItems="center"
							variant="unstyled"
							color="gray.600"
							gap={2}
							flexGrow={1}
							onClick={openSharePostModal}
						>
							<Box>
								<RiShareForwardLine size={24} />
							</Box>
							<Text>Share</Text>
						</Button>
					</Flex>
					<Divider />
				</Box>

				<FeedCommentInput postId={Number(id)} />
			</ContentContainer>
		</>
	);
};
