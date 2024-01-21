import { Notification, Prisma } from "@prisma/client";
import { Context } from "../../models";
import { GraphQLError } from "graphql";

interface CreateNotificationArgs {
	notificationUrl: string;
	notificationMessage: string;
	createdFor: string;
}

type PostPayloadType =
	| null
	| Prisma.Prisma__PostClient<Notification, never>
	| Notification;

export const notificationResolvers = {
	createNotification: async (
		_: any,
		{
			notificationUrl,
			notificationMessage,
			createdFor,
		}: CreateNotificationArgs,
		{ prisma, userInfo }: Context
	): Promise<PostPayloadType> => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		if (!notificationMessage || !notificationUrl) {
			throw new GraphQLError(
				"you must provide a link and message to create a notification"
			);
		}

		try {
			return await prisma.notification.create({
				data: {
					createdFor: createdFor,
					notificationMessage: notificationMessage,
					notificationUrl: notificationUrl,
					user: {
						connect: {
							uid: userInfo.userUid,
						},
					},
				},
			});
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
