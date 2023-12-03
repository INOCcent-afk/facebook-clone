import { graphQLClient } from "@/graphql/graphQLClient";
import { getUser } from "@/graphql/queries/user/user";
import { useQuery } from "@tanstack/react-query";

interface Props {
	uid: string;
	enabled?: boolean;
	token: string;
}

export const useGetUser = ({ uid, token, enabled = false }: Props) => {
	const query = useQuery(
		["user", uid],
		async () => {
			const { user } = await graphQLClient(token).request(getUser, {
				uid,
			});
			return user;
		},
		{
			enabled,
		}
	);

	return { ...query };
};
