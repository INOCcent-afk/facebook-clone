import { graphQLClient } from "@/graphql/graphQLClient";
import { useMutation } from "@tanstack/react-query";
import { cancelRejectFriendRequest as cancelRejectFriendRequestQL } from "@/graphql/mutations/user/cancelRejectFriendRequest";

interface Props {
	uid: string;
	token: string;
}

const cancelRejectFriendRequest = async ({ token, uid }: Props) => {
	const data = await graphQLClient(token).request(
		cancelRejectFriendRequestQL,
		{
			userUid: uid,
		}
	);
	return data;
};

export const useCancelRejectFriendRequest = () => {
	const mutation = useMutation(cancelRejectFriendRequest);

	return mutation;
};
