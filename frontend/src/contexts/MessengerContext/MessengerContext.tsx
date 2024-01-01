import { Message } from "@/models/Messenger";
import { FC, ReactNode, createContext, useContext, useState } from "react";

interface Context {
	activeChats: Message[] | null;
	handleSetActiveChat: (user: Message) => void;
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
	const [activeChats, setActiveChats] = useState<Message[]>([]);

	const handleSetActiveChat = (message: Message) => {
		const chatExists = activeChats.some((chat) => chat.id === message.id);

		if (chatExists) return;

		if (activeChats.length === 2) {
			let cloneChats = activeChats;
			cloneChats.shift();

			setActiveChats([...cloneChats, message]);
		} else {
			setActiveChats((prevArray) => [...prevArray, message]);
		}
	};

	const handleRemoveActiveChat = (id: string) => {
		setActiveChats(activeChats.filter((chat) => chat.id !== id));
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
