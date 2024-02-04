import { graphQLClient } from "@/graphql/graphQLClient";
import { useMutation } from "@tanstack/react-query";
import { updateProfile as updateProfileQL } from "@/graphql/mutations/profile/updateProfile";

interface Props {
	bio?: string;
	coverPhoto?: string;
	profilePicture?: string;
	token: string;
}

const updateProfile = async ({
	bio,
	coverPhoto,
	profilePicture,
	token,
}: Props) => {
	const { updateProfile } = await graphQLClient(token).request(
		updateProfileQL,
		{
			bio,
			coverPhoto,
			profilePicture,
		}
	);

	return updateProfile;
};

export const useUpdateProfile = () => {
	const mutation = useMutation(updateProfile);

	return mutation;
};
