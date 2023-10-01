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
				<Box maxWidth={1250} mx="auto" px={8}>
					<Flex justifyContent="space-between">
						<Box display="flex" textColor="white" gap={4}>
							<Avatar size="2xl" mt={-10} />
							<Box py={4}>
								<Heading>Michael Dave</Heading>
								<Text>528 friends</Text>
							</Box>
						</Box>
						<Flex gap={4} py={10}>
							<Button>Add to story</Button>
							<Button variant="gray">Edit profile</Button>
							<Button variant="gray">
								<HiChevronDown />
							</Button>
						</Flex>
					</Flex>

					<Divider />

					<Tabs>
						<TabList textColor="white" border="none">
							<Tab>Posts</Tab>
							<Tab>About</Tab>
							<Tab>Friends</Tab>
							<Tab>Photos</Tab>
							<Tab>Videos</Tab>
							<Tab>Reels</Tab>

							<Menu>
								<MenuButton
									as={Button}
									rightIcon={<IoChevronDownCircleOutline />}
								>
									More
								</MenuButton>
								<MenuList backgroundColor="black">
									<MenuItem backgroundColor="black">
										<Tab>Download</Tab>
									</MenuItem>
									<MenuItem backgroundColor="black">
										<Tab>Download</Tab>
									</MenuItem>
									<MenuItem backgroundColor="black">
										<Tab>Download</Tab>
									</MenuItem>
									<MenuItem backgroundColor="black">
										<Tab>Download</Tab>
									</MenuItem>
									<MenuItem backgroundColor="black">
										<Tab>Download</Tab>
									</MenuItem>
								</MenuList>
							</Menu>

							<Menu>
								<MenuButton as={Button} ml="auto">
									...
								</MenuButton>
								<MenuList backgroundColor="black">
									<MenuItem backgroundColor="black">
										<Link href="/">Download</Link>
									</MenuItem>
									<MenuItem backgroundColor="black">
										<Link href="/">Download</Link>
									</MenuItem>
									<MenuItem backgroundColor="black">
										<Link href="/">Download</Link>
									</MenuItem>
									<MenuItem backgroundColor="black">
										<Link href="/">Download</Link>
									</MenuItem>
									<MenuItem backgroundColor="black">
										<Link href="/">Download</Link>
									</MenuItem>
								</MenuList>
							</Menu>
						</TabList>

						<TabPanels>
							<TabPanel textColor="white">
								<p>Posts!</p>
							</TabPanel>
							<TabPanel textColor="white">
								<p>About!</p>
							</TabPanel>
							<TabPanel textColor="white">
								<p>Friends!</p>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>
			</Box>
		</>
	);
};
