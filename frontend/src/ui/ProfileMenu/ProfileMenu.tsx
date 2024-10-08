import {
	Avatar,
	Box,
	Button,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import { ExtraLinks } from "../ExtraLinks/ExtraLinks";
import { LabelledAction } from "../LabelledAction/LabelledAction";
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from "@/contexts";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const ProfileMenu = () => {
	const { user, setToken, setUser } = useAuth();

	const auth = getAuth();
	const router = useRouter();

	const logout = async () => {
		try {
			await signOut(auth);

			setUser(null);
			setToken(null);
			router.push("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Menu>
			<Tooltip label="Account">
				<MenuButton
					variant="unstyled"
					position="relative"
					size="circledMd"
					as={Button}
				>
					<Avatar
						name="Dan Abrahmov"
						src="https://bit.ly/dan-abramov"
					/>
					<Box
						position="absolute"
						bottom={0}
						right={-1}
						backgroundColor="gray.800"
						borderRadius="full"
						padding="1px"
					>
						<BiChevronDown size={16} color="white" />
					</Box>
				</MenuButton>
			</Tooltip>

			<MenuList
				backgroundColor="gray.700"
				border="none"
				boxShadow="0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)"
				width={350}
				pb={2}
				px={4}
			>
				<Link href={`/profile/${user?.uid}`}>
					<Flex
						color="white"
						my={4}
						boxShadow="0 2px 12px rgba(0, 0, 0, 0.2)"
						p={4}
						alignItems="center"
						gap={4}
						mb={6}
					>
						<Avatar
							name="Dan Abrahmov"
							src="https://bit.ly/dan-abramov"
						/>
						<Text fontSize="lg">
							{user?.firstName} {user?.lastName}
						</Text>
					</Flex>
				</Link>

				<MenuItem
					backgroundColor="gray.700"
					color="white"
					borderRadius="md"
					padding={0}
				>
					<LabelledAction
						icon={<ImExit size={24} />}
						width="full"
						label="Log Out"
						labelFontSize="lg"
						onClick={logout}
					/>
				</MenuItem>

				<ExtraLinks
					links={[
						"Privacy .",
						"Terms .",
						"Advertising .",
						"Ad Choices .",
						"Cookies .",
						"More .",
						"Meta © 2023 .",
					]}
					mt={4}
				/>
			</MenuList>
		</Menu>
	);
};
