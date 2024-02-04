import { postResolvers } from "./Post";
import { userResolvers } from "./User";
import { notificationResolvers } from "./Notification";
import { profileResolvers } from "./Profile";

export const Mutation = {
	...postResolvers,
	...userResolvers,
	...notificationResolvers,
	...profileResolvers,
};
