import { create } from "zustand";

type State = {
	newCoverPhoto: File | null;
	newProfilePicture: File | null;
	isEditorMode: boolean;
};

type Action = {
	updateNewCoverPhoto: (newCoverPhoto: State["newCoverPhoto"]) => void;
	updateNewProfilePicture: (
		newProfilePicture: State["newProfilePicture"]
	) => void;
	updateEditorMode: (isEditorMode: State["isEditorMode"]) => void;
	resetProfileStore: () => void;
};

const initialState: State = {
	newCoverPhoto: null,
	newProfilePicture: null,
	isEditorMode: false,
};

export const useProfileStore = create<State & Action>((set) => ({
	...initialState,
	updateNewProfilePicture: (newProfilePicture) =>
		set(() => ({ newProfilePicture })),
	updateNewCoverPhoto: (newCoverPhoto) => set(() => ({ newCoverPhoto })),
	updateEditorMode: (isEditorMode) =>
		set(() => ({ isEditorMode: isEditorMode })),

	resetProfileStore: () => {
		set(initialState);
	},
}));
