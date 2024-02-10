import {
	Avatar,
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { ContentContainer } from "../../containers/ContentContainer/ContentContainer";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { useDeletePost } from "@/apiHooks/post/useDeletePost";
import { useAuth } from "@/contexts";
import { Post } from "@/graphql/generated/graphql";
import { MeOnly } from "@/containers/MeOnly/MeOnly";
import { ConfirmationModal } from "../Modals/ConfirmationModal/ConfirmationModal";
import { UpdatePost } from "../UpdatePost/UpdatePost";
import { SharePost } from "../SharePost/SharePost";
import { SharedFeedPost } from "../SharedFeedPost/SharedFeedPost";
import Image from "next/image";

interface Props
	extends Pick<
		Post,
		"images" | "id" | "postContent" | "user" | "createdAt" | "sharedPost"
	> {}

export const FeedPost: FC<Props> = ({
	images,
	postContent,
	id,
	user,
	createdAt,
	sharedPost,
}) => {
	const { token } = useAuth();

	const { mutate: deletePost } = useDeletePost();

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

	const date = new Date(createdAt);

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const month = months[date.getMonth()];
	const day = date.getDate();
	const hours = date.getHours() % 12 || 12;
	const minutes = ("0" + date.getMinutes()).slice(-2);
	const ampm = date.getHours() < 12 ? "AM" : "PM";

	const formattedDate = `${month} ${day} at ${hours}:${minutes} ${ampm}`;

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

			<ContentContainer>
				<Flex justifyContent="space-between">
					<Flex gap={4}>
						<Avatar />
						<Box color="white">
							<Text fontWeight="bold">{`${user?.firstName}  ${user?.lastName}`}</Text>
							<Text fontSize="sm" color="gray.600">
								{formattedDate}
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

				<Box mb={4}>
					<Divider />
					<Flex py={2}>
						<Button
							display="flex"
							alignItems="center"
							variant="unstyled"
							color="gray.600"
							gap={2}
							flexGrow={1}
						>
							<Box marginTop={-1}>
								<AiOutlineLike size={24} />
							</Box>
							<Text>Like</Text>
						</Button>
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

				<Flex gap={4}>
					<Avatar size="sm" />
					<FormControl
						backgroundColor="gray.800"
						borderRadius={16}
						_hover={{
							backgroundColor: "gray.500",
						}}
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
								/>
							</HStack>
						</FormLabel>
					</FormControl>
				</Flex>
			</ContentContainer>
		</>
	);
};
