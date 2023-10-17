import { GraphQLError } from "graphql";
import { Context, Error, Me } from "../../models";

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
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		const user = await prisma.user.findUnique({
			where: {
				id: userInfo?.userId,
			},
		});

		if (!user) {
			throw new GraphQLError("User not found");
		}

		return {
			error: [],
			me: {
				userId: userInfo?.userId,
			},
		};
	},
};
