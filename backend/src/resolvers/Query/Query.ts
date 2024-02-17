import { userResolvers } from "./User";
import { meResolvers } from "./Me";
import { postResolvers } from "./Post";
import { chatResolvers } from "./Chat";
import { notificationResolvers } from "./Notification";
import { reactionResolvers } from "./Reaction";
import { commentResolvers } from "./Comment";

export const Query = {
	...userResolvers,
	...meResolvers,
	...postResolvers,
	...chatResolvers,
	...notificationResolvers,
	...reactionResolvers,
	...commentResolvers,
};
