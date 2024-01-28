import { postResolvers } from "./Post";
import { userResolvers } from "./User";
import { notificationResolvers } from "./Notification";
import { chatResolvers } from "./Chat";

export const Mutation = {
	...postResolvers,
	...userResolvers,
	...notificationResolvers,
	...chatResolvers,
};
