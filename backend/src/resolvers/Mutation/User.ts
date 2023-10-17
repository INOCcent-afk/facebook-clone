import { User, Prisma } from "@prisma/client";
import { Context, Error } from "../../models";
import { admin } from "../../firebaseConfig/firebase-config";
import { UserRecord } from "firebase-admin/lib/auth/user-record";
import { GraphQLError } from "graphql";

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
	error: Error;
	user?: null | Prisma.Prisma__UserClient<User, never> | User;
}

export const userResolvers = {
	registerUser: async (
		_: any,
		{ user }: UserProps,
		{ prisma }: Context
	): Promise<UserPayloadType> => {
		const { email, firstName, lastName, username, password } = user;

		if (!firstName) throw new GraphQLError("you must provide a firstName");
		if (!lastName) throw new GraphQLError("you must provide a lastName");
		if (!email) throw new GraphQLError("you must provide an email");
		if (!username) throw new GraphQLError("you must provide a username");

		let result = {} as UserRecord;

		try {
			result = await admin.auth().createUser({
				email,
				password,
			});
		} catch (error: any) {
			throw new GraphQLError(error.message, {
				extensions: {
					code: error.code,
				},
			});
		}

		try {
			const newUser = await prisma.user.create({
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
				user: newUser,
			};
		} catch (error) {
			await admin.auth().deleteUser(result.uid);

			if (
				error instanceof Prisma.PrismaClientKnownRequestError &&
				error.code === "P2002"
			) {
				throw new GraphQLError("Username already exists");
			}

			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
