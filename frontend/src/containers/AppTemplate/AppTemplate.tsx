import { useMe } from "@/apiHooks";
import { useAuth } from "@/contexts";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { FC, ReactNode, useEffect } from "react";

interface Props {
	children?: ReactNode;
}

export const AppTemplate: FC<Props> = ({ children }) => {
	const auth = getAuth();

	const { setToken, setUser, token } = useAuth();

	const { data } = useMe({
		token: token ?? "",
		enabled: Boolean(token),
	});

	console.log(data);

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
				firstName: data?.firstName,
				lastName: data?.lastName,
				uid: data?.uid,
			});
		}
	}, [data]);

	return <div>{children}</div>;
};
