import { Header } from "@/ui";
import {
	Avatar,
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { CoverPhoto } from "./ui";
import { HEADER_HEIGHT } from "@/utils/headerHeight";
import { HiChevronDown } from "react-icons/hi";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { ProfileHeader } from "./ui/ProfileHeader";

export const Profile = () => {
	return (
		<>
			<Header />
			<Box marginTop={HEADER_HEIGHT} backgroundColor="gray.700">
				<CoverPhoto />
				<ProfileHeader
					posts={<h1>Posts</h1>}
					about={<h1>About</h1>}
					friends={<h1>Friends</h1>}
				/>
			</Box>
		</>
	);
};
