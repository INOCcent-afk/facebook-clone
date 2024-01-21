import { userResolvers } from "./User";
import { meResolvers } from "./Me";
import { postResolvers } from "./Post";
import { chatResolvers } from "./Chat";
import { notificationResolvers } from "./Notification";

export const Query = {
	...userResolvers,
	...meResolvers,
	...postResolvers,
	...chatResolvers,
	...notificationResolvers,
};
