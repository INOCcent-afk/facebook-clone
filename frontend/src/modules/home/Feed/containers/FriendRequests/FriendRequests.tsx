import { Friendship } from "@/graphql/generated/graphql";
import { FacebookUser } from "@/ui";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Maybe } from "graphql/jsutils/Maybe";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
	friendRequest: Maybe<Maybe<Friendship>[]> | undefined;
}

export const FriendRequests: FC<Props> = ({ friendRequest }) => {
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

			{friendRequest?.length ? (
				<FacebookUser friend={friendRequest[0]} />
			) : null}
		</Box>
	);
};
