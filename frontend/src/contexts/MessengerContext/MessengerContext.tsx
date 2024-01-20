import { ChatRoom } from "@/graphql/generated/graphql";
import { Chat } from "@/models/Messenger";
import {
	FC,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { useSocket } from "../SocketContext/SocketContext";
import { useAuth } from "../AuthContext/AuthContext";

interface Context {
	activeChats: Chat[] | null;
	handleSetActiveChat: (chat: Chat) => void;
	handleRemoveActiveChat: (id: string) => void;
	chats: ChatRoom[] | null;
	setChats: (chats: ChatRoom[] | null) => void;
}

export const MessengerContext = createContext<Context>({
	activeChats: [],
	handleSetActiveChat: () => {},
	handleRemoveActiveChat: () => {},
	chats: null,
	setChats: () => {},
});

interface Props {
	children: ReactNode;
}

export const MessengerProvider: FC<Props> = ({ children }) => {
	const [activeChats, setActiveChats] = useState<Chat[]>([]);
	const [chats, setChats] = useState<ChatRoom[] | null>(null);

	const { user } = useAuth();
	const { socket } = useSocket();

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

	useEffect(() => {
		console.log(Boolean(socket));

		if (!socket) return;

		socket.emit("loadChats", {
			uid: user?.uid,
		});

		socket.on("loadChats", ({ chats }) => {
			console.log("FUCK");
			setChats(chats);
		});

		// Cleanup function for disconnecting the event listener
		return () => {
			socket.off("loadChats");
		};
	}, [socket]);

	return (
		<MessengerContext.Provider
			value={{
				activeChats,
				handleSetActiveChat,
				handleRemoveActiveChat,
				chats,
				setChats: setChats,
			}}
		>
			{children}
		</MessengerContext.Provider>
	);
};

export const useMessengerState = () => {
	const messenger = useContext(MessengerContext);

	return { ...messenger };
};
