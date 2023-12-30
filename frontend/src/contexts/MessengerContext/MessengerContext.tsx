import { FC, ReactNode, createContext, useContext, useState } from "react";

interface Message {
	id: string;
	name: string;
}
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
		if (activeChats.length === 2) {
			let tete = activeChats;
			tete.shift();

			setActiveChats([...tete, message]);
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
