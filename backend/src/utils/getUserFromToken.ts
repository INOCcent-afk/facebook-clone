// import JWT from "jsonwebtoken";
// import { JWT_SIGNATURE } from "./config";
// import { Me } from "../models";
// import { GraphQLError } from "graphql";
import { admin } from "../firebaseConfig/firebase-config";

export const getUserFromToken = async (token: string) => {
	try {
		if (!token) return null;

		const sanitizedToken = token.split(" ")[1];

		const sheesh = await admin.auth().verifyIdToken(sanitizedToken);

		return sheesh;
	} catch (error) {
		console.log(error);
		return null;
	}
};
