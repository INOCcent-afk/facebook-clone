import { gql } from "apollo-server";

export const profileTypeDef = gql`
	type Profile {
		id: ID!
		userId: ID!
		cover_photo: String
		profilePicture: String
		bio: String
	}
`;
