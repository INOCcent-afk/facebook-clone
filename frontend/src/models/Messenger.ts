import { Message } from "@/graphql/generated/graphql";

export interface Chat {
	roomId: string;
	name: string;
	messages: (Partial<Message> | null)[] | null | undefined;
	senderUid: string;
	receiverUid: string;
}
