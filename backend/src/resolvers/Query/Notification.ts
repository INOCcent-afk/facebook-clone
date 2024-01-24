import { GraphQLError } from "graphql";
import { Context } from "../../models";

interface NotificationsArgs {
	uid: string;
}

export const notificationResolvers = {
	notifications: async (
		_: any,
		{ uid }: NotificationsArgs,
		{ prisma, userInfo }: Context
	) => {
		if (!uid) {
			throw new GraphQLError("you must provide a user id");
		}

		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		try {
			const notifications = await prisma.notification.findMany({
				where: {
					createdFor: uid,
				},
				include: {
					user: true,
				},
			});

			return notifications;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
