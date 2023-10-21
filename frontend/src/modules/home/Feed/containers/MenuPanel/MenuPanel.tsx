import { LabelledAction } from "@/ui";
import { MOCK_PROFILE_PICTURE } from "@/utils";
import { Avatar, Box, Divider, Text } from "@chakra-ui/react";
import Link from "next/link";
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
				<Link href="/">
					<LabelledAction
						marginLeft={3}
						icon={
							<Text color="brand" marginTop={-1}>
								<AiFillHome size={24} />
							</Text>
						}
						label="Home"
					/>
				</Link>
			</Box>
			<Box position="relative">
				<Link href="/">
					<LabelledAction
						marginLeft={3}
						icon={<Avatar size="xs" src={MOCK_PROFILE_PICTURE} />}
						label="Michael Dave"
					/>
				</Link>
			</Box>
			<Box padding={2} paddingRight={0}>
				<Divider />
			</Box>
		</Box>
	);
};
