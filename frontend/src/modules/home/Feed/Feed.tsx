import { Header } from "@/ui";
import { Box } from "@chakra-ui/react";
import React from "react";
import { HEADER_HEIGHT } from "./utils";

export const Feed = () => {
	return (
		<>
			<Header />
			<Box
				backgroundColor="gray.900"
				height="100vh"
				width="full"
				paddingTop={HEADER_HEIGHT}
			></Box>
		</>
	);
};
