import { gql } from "apollo-server-express";

export const commentTypeDef = gql`
	type Comment {
		id: ID!
		userId: ID!
		postId: ID!
		commentParentId: ID!
		comment: String
	}
`;
