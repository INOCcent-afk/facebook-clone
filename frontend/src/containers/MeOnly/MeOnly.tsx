import { useAuth } from "@/contexts";
import React, { FC, ReactNode } from "react";

interface Props {
	uid: string;
	children: ReactNode;
}

export const MeOnly: FC<Props> = ({ uid, children }) => {
	const { user } = useAuth();


	
	if (user?.uid !== uid) {
		return null;
	}

	return <>{children}</>;
};
