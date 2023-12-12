import { graphql } from "@/graphql/generated";

export const getUser = graphql(/* GraphQL */ `
	query getUser($uid: String!) {
		user(uid: $uid) {
			id
			uid
			firstName
			lastName
			email
			profile {
				cover_photo
				profilePicture
				id
				userId
			}
			friendsCount
			isFriends
			isInFriendRequests
			isRequestingToBeFriend
		}
	}
`);
