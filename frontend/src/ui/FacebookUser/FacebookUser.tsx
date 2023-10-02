import {
	Avatar,
	AvatarGroup,
	Button,
	Flex,
	HStack,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const FacebookUser = () => {
	return (
		<Link href="/">
			<Flex gap={4}>
				<Avatar size="lg" />
				<Flex flexDirection="column" width="full">
					<HStack justifyContent="space-between" marginBottom={1}>
						<Text color="white" fontSize="sm" fontWeight="bold">
							Chona Abogadie
						</Text>
						<Text fontSize="sm" color="gray.600">
							17h
						</Text>
					</HStack>
					<HStack marginBottom={2}>
						<AvatarGroup max={2} gap={1}>
							<Avatar
								width={5}
								height={5}
								borderColor="gray.900"
							/>
							<Avatar
								width={5}
								height={5}
								borderColor="gray.900"
							/>
						</AvatarGroup>
						<Text fontSize="sm" color="gray.600">
							17 mutual friends
						</Text>
					</HStack>
					<HStack>
						<Button width="full">Confirm</Button>
						<Button width="full" backgroundColor="gray.400">
							Delete
						</Button>
					</HStack>
				</Flex>
			</Flex>
		</Link>
	);
};
