import { postResolvers } from "./Post";
import { userResolvers } from "./User";
import { notificationResolvers } from "./Notification";

export const Mutation = {
	...postResolvers,
	...userResolvers,
	...notificationResolvers,
};
