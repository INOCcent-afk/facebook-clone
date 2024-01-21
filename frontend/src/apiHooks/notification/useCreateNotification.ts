import { graphQLClient } from "@/graphql/graphQLClient";
import { createNotification as createNotificationQL } from "@/graphql/mutations/notification/createNotification";
import { useMutation } from "@tanstack/react-query";

interface Props {
	notificationMessage: string;
	notificationUrl: string;
	createdFor: string;
	token: string;
}

const createNotification = async ({
	token,
	notificationMessage,
	notificationUrl,
	createdFor,
}: Props) => {
	const data = await graphQLClient(token).request(createNotificationQL, {
		createdFor,
		notificationMessage,
		notificationUrl,
	});
	return data;
};

export const useCreateNotification = () => {
	const mutation = useMutation(createNotification);

	return mutation;
};
