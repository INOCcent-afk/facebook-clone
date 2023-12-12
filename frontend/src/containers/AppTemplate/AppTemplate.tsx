import { useMe } from "@/apiHooks";
import { useAuth } from "@/contexts";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { FC, ReactNode, useEffect } from "react";
import { io } from "socket.io-client";

interface Props {
	children?: ReactNode;
}

export const AppTemplate: FC<Props> = ({ children }) => {
	const auth = getAuth();

	const { setToken, setUser, token } = useAuth();

	useEffect(() => {
		const socket = io("http://localhost:4000");

		socket.emit("ping", { name: "bob" });
		socket.on("pong", (data) => console.log(data));
	}, []);

	const { data } = useMe({
		token: token ?? "",
		enabled: Boolean(token),
	});

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				window.localStorage.setItem("auth", "true");
				const token = await user.getIdToken();

				setToken(token);
			}
		});
	}, []);

	useEffect(() => {
		if (data) {
			setUser({
				...data,
			});
		}
	}, [data]);

	return <div>{children}</div>;
};
