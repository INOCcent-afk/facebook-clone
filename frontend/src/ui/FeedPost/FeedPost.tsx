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
import { ContentContainer } from "../ContentContainer/ContentContainer";
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

interface Props
	extends Pick<Post, "images" | "id" | "videos" | "postContent" | "user"> {}

export const FeedPost: FC<Props> = ({
	images,
	postContent,
	id,
	videos,
	user,
}) => {
	const { token } = useAuth();

	const { mutate: deletePost } = useDeletePost();

	const [isDeleted, setIsDelete] = useState(false);

	const {
		isOpen: isConfirmationOpen,
		onOpen: openConfirmationModal,
		onClose: closeConfirmationModal,
	} = useDisclosure();

	const {
		isOpen: isUpdatePostOpen,
		onOpen: openUpdatePost,
		onClose: closeUpdatePost,
	} = useDisclosure();

	const handleDeletePost = () => {
		deletePost(
			{
				token: token ?? "",
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

	return isDeleted ? null : (
		<>
			<UpdatePost
				isOpen={isUpdatePostOpen}
				onClose={closeUpdatePost}
				id={id}
				videos={videos}
				images={images}
				postContent={postContent}
			/>

			<ConfirmationModal
				isOpen={isConfirmationOpen}
				handleConfirm={handleDeletePost}
				title="Are you sure you want to delete this post?"
				onClose={closeConfirmationModal}
			/>

			<ContentContainer>
				<Flex justifyContent="space-between">
					<Flex gap={4}>
						<Avatar />
						<Box color="white">
							<Text fontWeight="bold">{`${user?.firstName}  ${user?.lastName}`}</Text>
							<Text fontSize="sm" color="gray.600">
								September 21 at 12:52 PM .
							</Text>
						</Box>
					</Flex>
					<Box>
						<MeOnly uid={user?.uid}>
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
										onClick={openUpdatePost}
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
				</Flex>

				<Box color="white" marginY={4}>
					<Text fontSize={images?.length ? 15 : 24}>
						{postContent}
					</Text>
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
