import firebaseAdmin from "firebase-admin";
import * as serviceAccount from "./serviceAccount.json";

firebaseAdmin.initializeApp({
	credential: firebaseAdmin.credential.cert(
		serviceAccount as firebaseAdmin.ServiceAccount
	),
});

export const admin = firebaseAdmin;
