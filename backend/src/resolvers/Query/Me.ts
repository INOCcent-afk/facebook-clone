import { Context, Error, Me } from "../../models";
import { generateErrorMessage } from "../../utils";

interface MePayloadType {
	error: Error;
	me?: Me;
}

export const meResolvers = {
	me: async (
		_: any,
		__: any,
		{ prisma, userInfo }: Context
	): Promise<MePayloadType> => {
		if (!userInfo?.userId) {
			return generateErrorMessage("Forbidden access (unauthenticated)");
		}

		const user = await prisma.user.findUnique({
			where: {
				id: userInfo?.userId,
			},
		});

		if (!user) {
			return generateErrorMessage("User not found");
		}

		return {
			error: null,
			me: {
				userId: userInfo?.userId,
			},
		};
	},
};
