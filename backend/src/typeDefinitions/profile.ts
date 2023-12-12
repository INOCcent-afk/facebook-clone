import { gql } from "apollo-server-express";

export const profileTypeDef = gql`
	type Profile {
		id: ID!
		userId: ID!
		cover_photo: String
		profilePicture: String
		bio: String
	}
`;
