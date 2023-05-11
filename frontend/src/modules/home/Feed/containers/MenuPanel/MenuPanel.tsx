import { LabelledAction } from "@/ui/LabelledAction";
import { Avatar, Box, Divider, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome } from "react-icons/ai";

export const MenuPanel = () => {
	return (
		<Box flexBasis="20%">
			<Box position="relative">
				{/* left blue border appear when link is active   */}
				{/* Todo later show border when url includes username */}
				<Box
					position="absolute"
					height="full"
					width={1}
					borderTopRightRadius="md"
					borderBottomRightRadius="md"
					backgroundColor="brand"
				></Box>
				<LabelledAction
					icon={
						<Text color="brand" marginTop={-1}>
							<AiFillHome size={24} />
						</Text>
					}
					label="Home"
				/>
			</Box>
			<Box position="relative">
				<LabelledAction
					icon={<Avatar size="xs" />}
					label="Michael Dave"
				/>
			</Box>
			<Box padding={2} paddingRight={0}>
				<Divider />
			</Box>
		</Box>
	);
};
