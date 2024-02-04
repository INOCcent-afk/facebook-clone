import { graphql } from "@/graphql/generated";

export const updateProfile = graphql(/* GraphQL */ `
	mutation updateProfile(
		$bio: String
		$coverPhoto: String
		$profilePicture: String
	) {
		updateProfile(
			bio: $bio
			coverPhoto: $coverPhoto
			profilePicture: $profilePicture
		) {
			id
			bio
			profilePicture
			coverPhoto
		}
	}
`);
