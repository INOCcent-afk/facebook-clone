import { userResolvers } from "./User";
import { meResolvers } from "./Me";
import { postResolvers } from "./Post";

export const Query = {
	...userResolvers,
	...meResolvers,
	...postResolvers,
};
