import { graphQLClient } from "@/graphql/graphQLClient";
import { getUser } from "@/graphql/queries/user/user";
import { useQuery } from "@tanstack/react-query";

interface Props {
	uid: string;
	enabled?: boolean;
}

export const useGetUser = ({ uid, enabled = false }: Props) => {
	const query = useQuery(
		["user", uid],
		async () => {
			const { user } = await graphQLClient().request(getUser, {
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
