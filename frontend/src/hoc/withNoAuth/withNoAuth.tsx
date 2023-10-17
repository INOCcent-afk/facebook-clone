import { useRouter } from "next/router";
import { FC } from "react";
import { isServer } from "@tanstack/react-query";
import { useAuth } from "@/contexts";
import { useEffect } from "react";

type withNoAuthenticationFn = (Component: FC) => FC;

const withNoAuth: withNoAuthenticationFn = (Component) => {
	const NotAuthenticated: FC = (): JSX.Element | null => {
		const { user } = useAuth();
		const router = useRouter();

		useEffect(() => {
			if (!isServer && user !== null) {
				router.push("/");
			}
		}, [user]);

		return user === null ? <Component /> : null;
	};

	return NotAuthenticated;
};

export default withNoAuth;
