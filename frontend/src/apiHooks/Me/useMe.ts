import { graphQLClient } from "@/graphql/graphQLClient";
import { getMe } from "@/graphql/queries/me/me";
import { useQuery } from "@tanstack/react-query";

interface Props {
	token: string;
	enabled: boolean;
}

export const useMe = ({ token, enabled = false }: Props) => {
	const query = useQuery(
		["me"],
		async () => {
			const { me } = await graphQLClient(token).request(getMe);
			return me;
		},
		{
			enabled,
		}
	);

	return { ...query };
};
