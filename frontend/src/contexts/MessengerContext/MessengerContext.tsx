import { FC, ReactNode, createContext, useContext, useState } from "react";

interface Context {
	activeChats: { id: string }[] | null;
	setActiveChats: (user: { id: string }[]) => void;
}

export const MessengerContext = createContext<Context>({
	activeChats: [],

	setActiveChats: () => {},
});

interface Props {
	children?: ReactNode;
}

export const MessengerProvider: FC<Props> = ({ children }) => {
	const [activeChats, setActiveChats] = useState<{ id: string }[] | null>(
		null
	);

	return (
		<MessengerContext.Provider value={{ activeChats, setActiveChats }}>
			{children}
		</MessengerContext.Provider>
	);
};

export const useMessengerState = () => {
	const messenger = useContext(MessengerContext);

	return { ...messenger };
};
