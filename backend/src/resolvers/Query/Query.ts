import { userResolvers } from "./User";
import { meResolvers } from "./Me";
import { postResolvers } from "./Post";
import { chatResolvers } from "./Chat";

export const Query = {
	...userResolvers,
	...meResolvers,
	...postResolvers,
	...chatResolvers,
};
