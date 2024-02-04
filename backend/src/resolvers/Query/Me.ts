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
				friendRequestsReceiver: {
					include: {
						User: true,
					},
				},
				friendRequestsSender: {
					include: {
						User: true,
					},
				},
				friends: true,
				profile: true,
			},
		});

		if (!user) {
			throw new GraphQLError("User not found");
		}

		const photos = await prisma.post.findMany({
			where: {
				userUid: userInfo.userUid,
				images: {
					some: {
						// Only post with images
					},
				},
			},
		});

		const result = { ...user, friendsCount: user.friends.length, photos };

		return result;
	},
};
