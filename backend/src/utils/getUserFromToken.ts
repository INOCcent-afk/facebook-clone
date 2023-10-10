import JWT from "jsonwebtoken";
import { JWT_SIGNATURE } from "./config";
import { Me } from "../models";

export const getUserFromToken = (token: string) => {
	try {
		if (!JWT_SIGNATURE) return null;

		return JWT.verify(token, JWT_SIGNATURE) as Me;
	} catch (error) {
		return null;
	}
};
