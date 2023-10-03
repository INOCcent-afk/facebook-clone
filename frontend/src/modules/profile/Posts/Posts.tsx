import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { ContentContainer } from "@/ui";
import { Friends, IntroBio, Photos } from "./containers";
import { ExtraLinks } from "./ui";

export const Posts = () => {
	return (
		<Flex gap={4}>
			<Box as="aside" flexBasis="40%">
				<Stack gap={4} mb={2}>
					<Stack gap={2}>
						<IntroBio />
					</Stack>

					<Photos position="sticky" top={-10} />
					<Friends />
				</Stack>
				<ExtraLinks />
			</Box>

			<Stack flexBasis="60%">
				<ContentContainer>
					<></>
				</ContentContainer>
			</Stack>
		</Flex>
	);
};
