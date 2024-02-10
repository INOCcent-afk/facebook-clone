import { create } from "zustand";

type State = {
	file: File | null;
	isEditorMode: boolean;
};

type Action = {
	updateFile: (firstName: State["file"]) => void;
	updateEditorMode: (lastName: State["isEditorMode"]) => void;
};

export const useProfileStore = create<State & Action>((set) => ({
	file: null,
	isEditorMode: false,
	updateFile: (file) => set(() => ({ file: file })),
	updateEditorMode: (isEditorMode) =>
		set(() => ({ isEditorMode: isEditorMode })),
}));
