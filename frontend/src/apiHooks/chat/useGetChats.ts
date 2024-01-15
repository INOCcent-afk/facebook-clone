import { graphQLClient } from "@/graphql/graphQLClient";
import { getChats } from "@/graphql/queries/chat/chats";
import { useQuery } from "@tanstack/react-query";

interface Props {
	uid: string;
	enabled?: boolean;
	token: string;
}

export const useGetChats = ({ uid, token, enabled = false }: Props) => {
	const query = useQuery(
		["chats"],
		async () => {
			const { chats } = await graphQLClient(token).request(getChats, {
				uid,
			});
			return chats;
		},
		{
			enabled,
		}
	);

	return { ...query };
};
