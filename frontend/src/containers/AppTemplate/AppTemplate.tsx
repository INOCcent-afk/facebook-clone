import { useAuth } from "@/contexts";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { FC, ReactNode, useEffect } from "react";

interface Props {
	children?: ReactNode;
}

export const AppTemplate: FC<Props> = ({ children }) => {
	const auth = getAuth();

	const { setToken, setUser } = useAuth();

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				// FETCH ME and assign the user object below

				// setUser({ })

				window.localStorage.setItem("auth", "true");
				const token = await user.getIdToken();

				setToken(token);
			}
		});
	}, []);

	return <div>{children}</div>;
};
