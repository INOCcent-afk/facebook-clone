import { useAuth } from "@/contexts";
import { Maybe } from "@/graphql/generated/graphql";
import React, { FC, ReactNode } from "react";

interface Props {
	uid?: Maybe<string> | undefined;
	children: ReactNode;
}

export const OtherUserOnly: FC<Props> = ({ uid, children }) => {
	const { user } = useAuth();

	if (user?.uid === uid) {
		return null;
	}

	return <>{children}</>;
};
