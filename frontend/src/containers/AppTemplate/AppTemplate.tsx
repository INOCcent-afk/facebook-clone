import { useMe } from "@/apiHooks";
import { useAuth } from "@/contexts";
import { useMessengerState } from "@/contexts/MessengerContext/MessengerContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { FC, ReactNode, useEffect } from "react";
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
