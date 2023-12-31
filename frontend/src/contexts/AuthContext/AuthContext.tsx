import { Maybe, User } from "@/graphql/generated/graphql";
import { createContext, useState, ReactNode, useContext, FC } from "react";
import { SocketProvider } from "../SocketContext/SocketContext";

interface Context {
	user: Maybe<User> | null;
	setUser: (user: Maybe<User> | null) => void;

	token: string | null;
	setToken: (token: string | null) => void;
}

export const AuthContext = createContext<Context>({
	user: null,
	setUser: () => {},

	token: null,
	setToken: () => {},
});

interface Props {
	children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
	const [user, setUser] = useState<Maybe<User> | null>(null);
	const [token, setToken] = useState<string | null>(null);

	return (
		<AuthContext.Provider value={{ user, setUser, token, setToken }}>
			<SocketProvider token={token}>{children}</SocketProvider>
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const auth = useContext(AuthContext);

	return { ...auth };
};
