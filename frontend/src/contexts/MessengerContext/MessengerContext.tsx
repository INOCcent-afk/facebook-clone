import { Chat } from "@/models/Messenger";
import { FC, ReactNode, createContext, useContext, useState } from "react";

interface Context {
	activeChats: Chat[] | null;
	handleSetActiveChat: (chat: Chat) => void;
	handleRemoveActiveChat: (id: string) => void;
}

export const MessengerContext = createContext<Context>({
	activeChats: [],
	handleSetActiveChat: () => {},
	handleRemoveActiveChat: () => {},
});

interface Props {
	children: ReactNode;
}

export const MessengerProvider: FC<Props> = ({ children }) => {
	const [activeChats, setActiveChats] = useState<Chat[]>([]);

	const handleSetActiveChat = (activeChat: Chat) => {
		const chatExists = activeChats.some(
			(chat) => chat.roomId === activeChat.roomId
		);

		if (chatExists) return;

		if (activeChats.length === 2) {
			let cloneChats = activeChats;
			cloneChats.shift();

			setActiveChats([...cloneChats, activeChat]);
		} else {
			setActiveChats((prevArray) => [...prevArray, activeChat]);
		}
	};

	const handleRemoveActiveChat = (id: string) => {
		setActiveChats(activeChats.filter((chat) => chat.roomId !== id));
	};

	return (
		<MessengerContext.Provider
			value={{ activeChats, handleSetActiveChat, handleRemoveActiveChat }}
		>
			{children}
		</MessengerContext.Provider>
	);
};

export const useMessengerState = () => {
	const messenger = useContext(MessengerContext);

	return { ...messenger };
};
