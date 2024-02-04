import { gql } from "apollo-server-express";

export const profileTypeDef = gql`
	type Profile {
		id: ID!
		userUid: ID!
		coverPhoto: String
		profilePicture: String
		bio: String
	}

	type Mutation {
		updateProfile(
			bio: String
			coverPhoto: String
			profilePicture: String
		): Profile!
	}
`;
