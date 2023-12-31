import { useMe } from "@/apiHooks";
import { useAuth } from "@/contexts";
import { useMessengerState } from "@/contexts/MessengerContext/MessengerContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { FC, ReactNode, useEffect } from "react";
import { io } from "socket.io-client";
import { PopupChats } from "../PopupChats/PopupChats";

interface Props {
	children?: ReactNode;
}

export const AppTemplate: FC<Props> = ({ children }) => {
	const auth = getAuth();

	const { setToken, setUser, token } = useAuth();
	const { activeChats, handleRemoveActiveChat } = useMessengerState();

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

				const socket = io("http://localhost:4000", {
					auth: {
						token: token,
					},
				});

				socket.emit("joinPrivateRoom", "IVEL84uKeebpXS5I5ViNKoajprq1");
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

	console.log(activeChats);

	return (
		<div>
			{children}

			<PopupChats
				chats={activeChats}
				handleRemoveActiveChat={handleRemoveActiveChat}
			/>
		</div>
	);
};
