import { graphQLClient } from "@/graphql/graphQLClient";
import { useMutation } from "@tanstack/react-query";
import { confirmFriendRequest as confirmFriendRequestQL } from "@/graphql/mutations/user/confirmFriendRequest";

interface Props {
	uid: string;
	token: string;
}

const confirmFriendRequest = async ({ token, uid }: Props) => {
	const data = await graphQLClient(token).request(confirmFriendRequestQL, {
		userUid: uid,
	});
	return data;
};

export const useConfirmFriendRequest = () => {
	const mutation = useMutation(confirmFriendRequest);

	return mutation;
};
