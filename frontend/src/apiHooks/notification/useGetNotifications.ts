import { graphQLClient } from "@/graphql/graphQLClient";
import { getNotifications } from "@/graphql/queries/notification/notifications";
import { useQuery } from "@tanstack/react-query";

interface Props {
	uid: string;
	enabled?: boolean;
	token: string;
}

export const useGetNotifications = ({ uid, token, enabled = false }: Props) => {
	const query = useQuery(
		["notifications"],
		async () => {
			const { notifications } = await graphQLClient(token).request(
				getNotifications,
				{
					uid,
				}
			);
			return notifications;
		},
		{
			enabled,
		}
	);

	return { ...query };
};
