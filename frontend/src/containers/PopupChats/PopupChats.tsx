import { Message } from "@/models/Messenger";
import { PopupChat } from "@/ui/PopupChat/PopupChat";
import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
	chats: Message[] | null;
	handleRemoveActiveChat: (id: string) => void;
}

export const PopupChats: FC<Props> = ({ chats, handleRemoveActiveChat }) => {
	return (
		<Flex position="fixed" bottom={0} right={15} gap={4}>
			{chats?.map((chat) => (
				<PopupChat
					closeChat={handleRemoveActiveChat}
					id={chat.id}
					name={chat.name}
					key={chat.id}
				/>
			))}
		</Flex>
	);
};
