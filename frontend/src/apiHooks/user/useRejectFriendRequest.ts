import { graphQLClient } from "@/graphql/graphQLClient";
import { useMutation } from "@tanstack/react-query";
import { rejectFriendRequest as rejectFriendRequestQL } from "@/graphql/mutations/user/rejectFriendRequest";

interface Props {
	uid: string;
	token: string;
}

const rejectFriendRequest = async ({ token, uid }: Props) => {
	const data = await graphQLClient(token).request(rejectFriendRequestQL, {
		userUid: uid,
	});
	return data;
};

export const useRejectFriendRequest = () => {
	const mutation = useMutation(rejectFriendRequest);

	return mutation;
};
