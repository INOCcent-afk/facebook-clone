import { User, Prisma } from "@prisma/client";
import { Context } from "../../models";
import { admin } from "../../firebaseConfig/firebase-config";
import { UserRecord } from "firebase-admin/lib/auth/user-record";

interface UserProps {
	user: {
		firstName: string;
		lastName: string;
		username: string;
		email: string;
		password: string;
	};
}

interface UserPayloadType {
	error: { message: string }[];
	user: null | Prisma.Prisma__UserClient<User, never> | User;
}

export const userResolvers = {
	registerUser: async (
		_: any,
		{ user }: UserProps,
		{ prisma }: Context
	): Promise<UserPayloadType> => {
		const { email, firstName, lastName, username, password } = user;

		const generateMissingFieldsError = (field: string) => {
			return {
				error: [
					{
						message: `you must provide a ${field}`,
					},
				],
				user: null,
			};
		};

		if (!firstName) {
			return generateMissingFieldsError("firstName");
		}

		if (!lastName) {
			return generateMissingFieldsError("lastName");
		}

		if (!email) {
			return generateMissingFieldsError("email");
		}

		if (!username) {
			return generateMissingFieldsError("username");
		}

		let result = {} as UserRecord;

		try {
			result = await admin.auth().createUser({
				email,
				password,
			});
		} catch (error) {
			return {
				error: [
					{
						message: JSON.stringify(error),
					},
				],
				user: null,
			};
		}

		try {
			const user = await prisma.user.create({
				data: {
					firstName,
					email,
					lastName,
					username,
					uid: result.uid,
				},
			});

			return {
				error: [],
				user,
			};
		} catch (error) {
			await admin.auth().deleteUser(result.uid);

			return {
				error: [
					{
						message: JSON.stringify(error),
					},
				],
				user: null,
			};
		}
	},
};
