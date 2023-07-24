import JWT from "jsonwebtoken";
import { JWT_SIGNATURE } from "./config";

export const getUserFromToken = (token: string) => {
	try {
		if (!JWT_SIGNATURE) return null;

		return JWT.verify(token, JWT_SIGNATURE) as {
			userId: number;
		};
	} catch (error) {
		return null;
	}
};
