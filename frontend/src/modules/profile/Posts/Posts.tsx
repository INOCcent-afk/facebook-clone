import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import { CreateFeed, ExtraLinks } from "@/ui";
import { Friends, IntroBio, Photos } from "./containers";
import { FeedPost } from "@/ui/FeedPost/FeedPost";
import { useAuth } from "@/contexts";
import { useRouter } from "next/router";
import { useGetUser } from "@/apiHooks/user/useGetUser";

interface Props {}

export const Posts: FC<Props> = () => {
	const { user } = useAuth();
	const { query } = useRouter();
	const userId = query.user_id as string;

	const isUser = user ? Boolean(userId) && user?.uid !== userId : false;

	const { data, error, refetch } = useGetUser({
		uid: userId,
		enabled: isUser,
	});

	console.log(data);

	return (
		<Flex gap={4}>
			<Box as="aside" flexBasis="40%">
				<Box position="sticky" top="-600px">
					<Stack gap={4} mb={2}>
						<Stack gap={2}>
							<IntroBio />
						</Stack>

						<Photos />
						<Friends />
					</Stack>
					<ExtraLinks
						links={[
							"Privacy .",
							"Terms .",
							"Advertising .",
							"Ad Choices .",
							"Cookies .",
							"More .",
							"Meta © 2023 .",
						]}
					/>
				</Box>
			</Box>

			<Stack flexBasis="60%">
				<CreateFeed />

				<FeedPost />
			</Stack>
		</Flex>
	);
};
