import { graphQLClient } from "@/graphql/graphQLClient";
import { updateChatViewed as updateChatViewedQL } from "@/graphql/mutations/chat/updateChatUnviewed";
import { useMutation } from "@tanstack/react-query";

interface Props {
	roomId: string;
	token: string;
}

const updateChatViewed = async ({ token, roomId }: Props) => {
	const data = await graphQLClient(token).request(updateChatViewedQL, {
		roomId,
	});
	return data;
};

export const useUpdateChatViewed = () => {
	const mutation = useMutation(updateChatViewed);

	return mutation;
};
