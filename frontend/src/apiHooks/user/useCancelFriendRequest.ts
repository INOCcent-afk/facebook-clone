import { graphQLClient } from "@/graphql/graphQLClient";
import { useMutation } from "@tanstack/react-query";
import { cancelFriendRequest as cancelFriendRequestQL } from "@/graphql/mutations/user/cancelFriendRequest";

interface Props {
	uid: string;
	token: string;
}

const cancelFriendRequest = async ({ token, uid }: Props) => {
	const data = await graphQLClient(token).request(cancelFriendRequestQL, {
		userUid: uid,
	});
	return data;
};

export const useCancelFriendRequest = () => {
	const mutation = useMutation(cancelFriendRequest);

	return mutation;
};
