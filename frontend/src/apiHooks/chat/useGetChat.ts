import { graphQLClient } from "@/graphql/graphQLClient";
import { getChat } from "@/graphql/queries/chat/chat";
import { useQuery } from "@tanstack/react-query";

interface Props {
	senderUid: string;
	receiverUid: string;
	enabled?: boolean;
	token: string;
}

export const useGetChat = ({
	senderUid,
	receiverUid,
	token,
	enabled = false,
}: Props) => {
	const query = useQuery(
		["chat", senderUid, receiverUid],
		async () => {
			const { chat } = await graphQLClient(token).request(getChat, {
				senderUid,
				receiverUid,
			});
			return chat;
		},
		{
			enabled,
		}
	);

	return { ...query };
};
