import { graphQLClient } from "@/graphql/graphQLClient";
import { useMutation } from "@tanstack/react-query";
import { unfriend as unfriendQL } from "@/graphql/mutations/user/unfriend";

interface Props {
	uid: string;
	token: string;
}

const unfriend = async ({ token, uid }: Props) => {
	const data = await graphQLClient(token).request(unfriendQL, {
		userUid: uid,
	});
	return data;
};

export const useUnfriend = () => {
	const mutation = useMutation(unfriend);

	return mutation;
};
