import { graphQLClient } from "@/graphql/graphQLClient";
import { updateChatUnviewed as updateChatUnviewedQL } from "@/graphql/mutations/chat/updateChatViewed";
import { useMutation } from "@tanstack/react-query";

interface Props {
	roomId: string;
	token: string;
}

const updateChatUnviewed = async ({ token, roomId }: Props) => {
	const data = await graphQLClient(token).request(updateChatUnviewedQL, {
		roomId,
	});
	return data;
};

export const useUpdateChatUnviewed = () => {
	const mutation = useMutation(updateChatUnviewed);

	return mutation;
};
