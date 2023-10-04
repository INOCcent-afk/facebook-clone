import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import { ContentContainer } from "@/ui";
import { Friends, IntroBio, Photos } from "./containers";
import { ExtraLinks } from "./ui";

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
					<ExtraLinks />
				</Box>
			</Box>

			<Stack flexBasis="60%">
				<ContentContainer minHeight={10000}>
					<></>
				</ContentContainer>
			</Stack>
		</Flex>
	);
};
