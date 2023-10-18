import { User } from "@/graphql/generated/graphql";
import { createContext, useState, ReactNode, useContext, FC } from "react";

interface Context {
	user: Partial<User> | null;
	setUser: (user: Partial<User>) => void;

	token: string | null;
	setToken: (token: string) => void;
}

export const AuthContext = createContext<Context>({
	user: null,
	setUser: () => {},

	token: null,
	setToken: () => {},
});

interface Props {
	children?: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
	const [user, setUser] = useState<Partial<User> | null>(null);
	const [token, setToken] = useState<string | null>(null);

	return (
		<AuthContext.Provider value={{ user, setUser, token, setToken }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const auth = useContext(AuthContext);

	return { ...auth };
};
