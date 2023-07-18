import { FacebookUser } from "@/ui";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const FriendRequests = () => {
	return (
		<Box>
			<Flex justifyContent="space-between" marginBottom={4}>
				<Text color="white" fontWeight="500">
					Friend requests
				</Text>
				<Link href="/">
					<Text color="brand">See all</Text>
				</Link>
			</Flex>

			<FacebookUser />
		</Box>
	);
};
