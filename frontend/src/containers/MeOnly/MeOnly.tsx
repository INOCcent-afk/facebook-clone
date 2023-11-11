import { useAuth } from "@/contexts";
import { Maybe } from "@/graphql/generated/graphql";
import React, { FC, ReactNode } from "react";

interface Props {
	uid?: Maybe<string> | undefined;
	children: ReactNode;
}

export const MeOnly: FC<Props> = ({ uid, children }) => {
	const { user } = useAuth();

	console.log(user);

	if (user?.uid !== uid) {
		return null;
	}

	return <>{children}</>;
};
