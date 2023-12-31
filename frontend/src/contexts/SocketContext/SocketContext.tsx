import {
	FC,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { Socket, io } from "socket.io-client";

interface Context {
	socket: Socket | null;
}

export const MessengerContext = createContext<Context>({
	socket: null,
});

interface Props {
	children: ReactNode;
	token: string | null;
}

export const SocketProvider: FC<Props> = ({ token, children }) => {
	const [socket, setSocket] = useState<Socket | null>(null);

	useEffect(() => {
		if (!token) return;

		const socket = io("http://localhost:4000", {
			auth: {
				token: token,
			},
		});

		setSocket(socket);
	}, [token]);

	return (
		<MessengerContext.Provider value={{ socket }}>
			{children}
		</MessengerContext.Provider>
	);
};

export const useSocket = () => {
	const socket = useContext(MessengerContext);

	return { ...socket };
};
