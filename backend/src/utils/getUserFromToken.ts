import JWT from "jsonwebtoken";
require("dotenv").config();

export const getUserFromToken = (token: string) => {
	try {
		if (!process.env.JWT_SIGNATURE) return null;

		return JWT.verify(token, process.env.JWT_SIGNATURE) as {
			userId: number;
		};
	} catch (error) {
		return null;
	}
};
