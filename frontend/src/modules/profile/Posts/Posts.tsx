import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import { CreateFeed, ExtraLinks } from "@/ui";
import { Friends, IntroBio, Photos } from "./containers";
import { FeedPost } from "@/ui/FeedPost/FeedPost";

interface Props {}

export const Posts: FC<Props> = () => {
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
