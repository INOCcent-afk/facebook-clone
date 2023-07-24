// var admin = require("firebase-admin");

// var serviceAccount = require("./serviceAccount.json");

// admin.initializeApp({
// 	credential: admin.credential.cert(serviceAccount),
// });

// module.exports = admin;

import firebaseAdmin from "firebase-admin";
import * as serviceAccount from "./serviceAccount.json";

firebaseAdmin.initializeApp({
	credential: firebaseAdmin.credential.cert(
		serviceAccount as firebaseAdmin.ServiceAccount
	),
});

export const admin = firebaseAdmin;
