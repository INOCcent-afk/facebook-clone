import { Context } from "../../models";
import { GraphQLError } from "graphql";

interface ProfileProps {
	bio: string;
	coverPhoto: string;
	profilePicture: string;
}

export const profileResolvers = {
	updateProfile: async (
		_: any,
		{ bio, coverPhoto, profilePicture }: ProfileProps,
		{ prisma, userInfo }: Context
	) => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access  (unauthenticated)");
		}

		try {
			const updatedProfile = await prisma.profile.update({
				data: {
					bio,
					coverPhoto,
					profilePicture,
				},
				where: {
					userUid: userInfo.userUid,
				},
			});

			return updatedProfile;
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
