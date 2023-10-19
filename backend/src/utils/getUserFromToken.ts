import { admin } from "../firebaseConfig/firebase-config";

export const getUserFromToken = async (token: string) => {
	try {
		if (!token) return null;

		const sanitizedToken = token.split(" ")[1];

		const user = await admin.auth().verifyIdToken(sanitizedToken);

		return user;
	} catch (error) {
		return null;
	}
};
