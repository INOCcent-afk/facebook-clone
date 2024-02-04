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
				coverPhoto
				profilePicture
				id
				userUid
			}
			friendsCount
			isFriends
			isInFriendRequests
			isRequestingToBeFriend
		}
	}
`);
