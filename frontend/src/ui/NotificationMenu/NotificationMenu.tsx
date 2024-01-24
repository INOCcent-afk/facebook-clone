import {
	Box,
	Button,
	Flex,
	Heading,
	Menu,
	MenuButton,
	MenuList,
	Tooltip,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoNotificationsSharp } from "react-icons/io5";
import { NotificationPreview } from "./ui/NotificationPreview";
import { useSocket } from "@/contexts/SocketContext/SocketContext";
import { useAuth } from "@/contexts";
import { useGetNotifications } from "@/apiHooks/notification/useGetNotifications";
import { useQueryClient } from "@tanstack/react-query";

export const NotificationMenu = () => {
	const { user, token } = useAuth();

	const queryClient = useQueryClient();

	const { data: notifications } = useGetNotifications({
		token: token ?? "",
		uid: user?.uid ?? "",
		enabled: Boolean(token && user?.uid),
	});

	const { socket } = useSocket();

	useEffect(() => {
		if (!socket || !user) return;

		socket.emit("loadNotifications", {
			uid: user?.uid,
		});

		socket.on(
			`${user?.uid}_notify`,
			({ notification: newNotification }) => {
				if (!notifications) {
					queryClient.setQueryData(
						["notifications"],
						[newNotification]
					);
				} else {
					queryClient.setQueryData(
						["notifications"],
						[...notifications, newNotification]
					);
				}
			}
		);

		socket.on(`${user.uid}_loadNotifications`, ({ notifications }) => {
			queryClient.setQueryData(["notifications"], notifications);
		});

		// Cleanup function for disconnecting the event listener
		return () => {
			socket.off("loadNotifications");
			socket.off(`${user.uid}_loadNotifications`);
			socket.off(`${user?.uid}_notify`);
		};
	}, [socket, user, notifications]);

	console.log(notifications);

	return (
		<Menu>
			<Tooltip label="Notifications">
				<MenuButton
					as={Button}
					variant="circledButton"
					size="circledMd"
					position="relative"
				>
					<IoNotificationsSharp
						size={20}
						style={{
							width: "100%",
						}}
					/>
				</MenuButton>
			</Tooltip>

			<MenuList
				backgroundColor="gray.700"
				border="none"
				boxShadow="0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)"
				width={350}
				pb={4}
				px={2}
			>
				<Flex justifyContent="space-between">
					<Heading as="h4" color="white" px={2}>
						Notifications
					</Heading>
					<Flex gap={1}>
						<Button variant="circledButton">
							<HiOutlineDotsHorizontal />
						</Button>
					</Flex>
				</Flex>

				<Box marginTop={4}>
					{notifications &&
						notifications.map((data) => (
							<NotificationPreview
								key={data?.id}
								user={data?.user}
								message={data?.notificationMessage}
							/>
						))}
				</Box>
			</MenuList>
		</Menu>
	);
};
