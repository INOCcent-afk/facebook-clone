import { User } from "@/graphql/generated/graphql";
import { graphQLClient } from "@/graphql/graphQLClient";
import { registerUser as registerUserQL } from "@/graphql/mutations/user/registerUser";
import { useMutation } from "@tanstack/react-query";

interface Props
	extends Pick<User, "email" | "firstName" | "lastName" | "username"> {
	password?: string;
}

const registerUser = async (payload: Props) => {
	const data = await graphQLClient.request(registerUserQL, {
		user: payload,
	});
	return { registerUser: data };
};

export const useRegisterUser = () => {
	const mutation = useMutation(registerUser);

	return mutation;
};
