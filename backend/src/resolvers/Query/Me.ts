import { GraphQLError } from "graphql";
import { Context } from "../../models";
import { User } from "@prisma/client";

export const meResolvers = {
	me: async (
		_: any,
		__: any,
		{ prisma, userInfo }: Context
	): Promise<User> => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		const user = await prisma.user.findUnique({
			where: {
				uid: userInfo?.userUid,
			},
			include: {
				friendRequest: true,
				friends: true,
			},
		});

		if (!user) {
			throw new GraphQLError("User not found");
		}

		const result = { ...user, friendsCount: user.friends.length };

		return result;
	},
};
