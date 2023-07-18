import { LabelledAction } from "@/ui/LabelledAction";
import { Avatar, Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

export const Messenger = () => {
	return (
		<>
			<VStack alignItems="flex-start">
				<Flex
					width="full"
					alignItems="center"
					justifyContent="space-between"
				>
					<Text color="white">Contacts</Text>
					<Text color="gray.600">
						<HiOutlineSearch />
					</Text>
				</Flex>
				<Flex flexDirection="column" width="full">
					<LabelledAction
						padding={2}
						marginLeft={-2}
						icon={<Avatar size="sm" />}
						label="Julaika Tradio Inoc"
						labelFontSize="xs"
					/>
					<LabelledAction
						padding={2}
						marginLeft={-2}
						icon={<Avatar size="sm" />}
						label="Julaika Tradio Inoc"
						labelFontSize="xs"
					/>
					<LabelledAction
						padding={2}
						marginLeft={-2}
						icon={<Avatar size="sm" />}
						label="Julaika Tradio Inoc"
						labelFontSize="xs"
					/>
					<LabelledAction
						padding={2}
						marginLeft={-2}
						icon={<Avatar size="sm" />}
						label="Julaika Tradio Inoc"
						labelFontSize="xs"
					/>
				</Flex>
			</VStack>
			<VStack alignItems="flex-start">
				<Flex
					width="full"
					alignItems="center"
					justifyContent="space-between"
				>
					<Text color="white">Group Conversations</Text>
				</Flex>
				<Flex flexDirection="column" width="full">
					<LabelledAction
						padding={2}
						marginLeft={-2}
						icon={<Avatar size="sm" />}
						label="Julaika Tradio Inoc"
						labelFontSize="xs"
					/>
					<LabelledAction
						padding={2}
						marginLeft={-2}
						icon={<Avatar size="sm" />}
						label="Julaika Tradio Inoc"
						labelFontSize="xs"
					/>
					<LabelledAction
						padding={2}
						marginLeft={-3}
						icon={<AiFillPlusCircle color="gray" size={32} />}
						label="Create new group"
						labelFontSize="xs"
					/>
				</Flex>
			</VStack>
		</>
	);
};
