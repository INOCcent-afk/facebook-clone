import { useAddFriend } from "@/apiHooks/user/useAddFriend";
import { useCancelRejectFriendRequest } from "@/apiHooks/user/useCancelFriendRequest";
import { useConfirmFriendRequest } from "@/apiHooks/user/useCofirmFriendRequest";

interface Props {
	token: string;
	uid: string;
}

export const useFriendControls = ({ token, uid }: Props) => {
	const { mutate: addFriend } = useAddFriend();
	const { mutate: cancelRejectFriendRequest } =
		useCancelRejectFriendRequest();
	const { mutate: confirmFriendRequest } = useConfirmFriendRequest();

	const handleAddFriend = () => {
		addFriend({ token, uid });
	};

	const handleCancelRejectFriendRequest = () => {
		cancelRejectFriendRequest({ token, uid });
	};

	const handleConfirmFriendRequest = () => {
		confirmFriendRequest({ token, uid });
	};

	return {
		handleAddFriend,
		handleCancelRejectFriendRequest,
		handleConfirmFriendRequest,
	};
};
