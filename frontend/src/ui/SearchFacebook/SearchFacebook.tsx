import { FEED_MID_COLUMN_MAX_WIDTH } from "@/modules/home/Feed/utils";
import { Box, FormControl, FormLabel, HStack, Input } from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchFacebook = () => {
	return (
		<FormControl
			maxWidth={FEED_MID_COLUMN_MAX_WIDTH}
			backgroundColor="gray.800"
			borderRadius={16}
			_hover={{
				backgroundColor: "gray.500",
			}}
		>
			<FormLabel
				height={10}
				_focusVisible={{
					outline: "none", // Fixed later: only show border on tab but not on click
				}}
				margin={0}
			>
				<HStack
					width="full"
					height="full"
					position="relative"
					paddingLeft={8}
				>
					<Box position="absolute" left={2} color="gray.600">
						<AiOutlineSearch size={20} />
					</Box>
					<Input
						variant="unstyled"
						size="sm"
						padding={0}
						placeholder="Search Facebook"
						color="white"
						_placeholder={{
							color: "gray.600",
						}}
					/>
				</HStack>
			</FormLabel>
		</FormControl>
	);
};
