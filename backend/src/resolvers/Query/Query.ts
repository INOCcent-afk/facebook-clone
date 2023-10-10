import { userResolvers } from "./User";
import { meResolvers } from "./Me";

export const Query = {
	...userResolvers,
	...meResolvers,
};
