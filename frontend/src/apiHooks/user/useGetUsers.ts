import { graphQLClient } from "@/graphql/graphQLClient";
import { getUsers } from "@/graphql/queries/user/users";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
	const query = useQuery(["users"], async () => {
		const { users } = await graphQLClient.request(getUsers);
		return users;
	});

	return { ...query };
};
