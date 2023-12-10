import { useAddFriend } from "@/apiHooks/user/useAddFriend";
import { useRejectFriendRequest } from "@/apiHooks/user/useRejectFriendRequest";
import { useConfirmFriendRequest } from "@/apiHooks/user/useCofirmFriendRequest";
import { useCancelFriendRequest } from "@/apiHooks/user/useCancelFriendRequest";
import { useUnfriend } from "@/apiHooks/user/useUnfriend";

interface Props {
	token: string;
	uid: string;
}

export const useFriendControls = ({
	token,
	uid,
}: Props): {
	handleAddFriend: () => void;
	handleRejectFriendRequest: () => void;
	handleConfirmFriendRequest: () => void;
	handleCancelFriendRequest: () => void;
	handleUnfriend: () => void;
} => {
	const { mutate: addFriend } = useAddFriend();
	const { mutate: rejectFriendRequest } = useRejectFriendRequest();
	const { mutate: confirmFriendRequest } = useConfirmFriendRequest();
	const { mutate: cancelFriendRequest } = useCancelFriendRequest();
	const { mutate: unfriend } = useUnfriend();

	console.log(token, uid);

	const handleAddFriend = () => {
		addFriend({ token, uid });
	};
	const handleUnfriend = () => {
		unfriend({ token, uid });
	};

	const handleConfirmFriendRequest = () => {
		confirmFriendRequest({ token, uid });
	};

	const handleRejectFriendRequest = () => {
		rejectFriendRequest({ token, uid });
	};

	const handleCancelFriendRequest = () => {
		cancelFriendRequest({ token, uid });
	};

	return {
		handleAddFriend,
		handleRejectFriendRequest,
		handleConfirmFriendRequest,
		handleCancelFriendRequest,
		handleUnfriend,
	};
};
