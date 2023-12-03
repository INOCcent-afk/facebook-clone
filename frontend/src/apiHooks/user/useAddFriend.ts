import { graphQLClient } from "@/graphql/graphQLClient";
import { useMutation } from "@tanstack/react-query";
import { addFriend as addFriendQL } from "@/graphql/mutations/user/addFriend";

interface Props {
	uid: string;
	token: string;
}

const addFriend = async ({ token, uid }: Props) => {
	const data = await graphQLClient(token).request(addFriendQL, {
		receiverUid: uid,
	});
	return data;
};

export const useAddFriend = () => {
	const mutation = useMutation(addFriend);

	return mutation;
};
