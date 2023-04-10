import { gql } from "apollo-server";
import { commentTypeDef } from "./comment";

export const postTypeDef = gql`
	type Post {
		id: ID!
		userId: ID!
		postParentId: ID!
		images: [String]
		videos: [String]
		comments: [Comment!]!
	}

	${commentTypeDef}
`;
