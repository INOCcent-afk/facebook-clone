import { Header } from "@/ui";
import { Box } from "@chakra-ui/react";
import React from "react";
import { CoverPhoto } from "./ui";
import { HEADER_HEIGHT } from "@/utils/headerHeight";

export const Profile = () => {
	return (
		<>
			<Header />
			<Box
				backgroundColor="gray.900"
				minHeight={1000}
				marginTop={HEADER_HEIGHT}
			>
				<CoverPhoto />
			</Box>
		</>
	);
};
