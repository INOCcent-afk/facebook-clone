import { Chat } from "@/models/Messenger";
import { PopupChat } from "@/ui/PopupChat/PopupChat";
import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
	chats: Chat[] | null;
	handleRemoveActiveChat: (id: string) => void;
}

export const PopupChats: FC<Props> = ({ chats, handleRemoveActiveChat }) => {
	console.log(chats);
	return (
		<Flex position="fixed" bottom={0} right={15} gap={4}>
			{chats?.map((chat) => (
				<PopupChat
					closeChat={handleRemoveActiveChat}
					roomId={chat.roomId}
					name={chat.name}
					receiverUid={chat.receiverUid}
					senderUid={chat.senderUid}
					messages={chat.messages}
					key={chat.roomId}
				/>
			))}
		</Flex>
	);
};
