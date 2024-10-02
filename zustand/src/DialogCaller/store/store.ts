import { create } from 'zustand';
import { createSelectors } from '../../utils/createSelectors';

import { immer } from 'zustand/middleware/immer';
import { StateCreator } from 'zustand';
import { ComponentProps, ComponentType } from 'react';

type StateType = StateCreator<DialogCallerState, [['zustand/immer', never]], []>
  
  interface DialogCallerState {
	dialogStack: Array<{
		Element: ComponentType<any>,
		props: unknown;
	}>;
	terminateDialog: (name: string) => void;
	callDialog: <T extends ComponentType<any>>({ Element, props }: { Element: T, props: ComponentProps<T> }) => void
  }
  
  const state: StateType = (set) => ({
	dialogStack: [],
	callDialog: ({ Element, props }) => set(draft => {
		draft.dialogStack.push({ Element, props: props || null });
	}),
	
	terminateDialog: name => set(draft => {
		const dialogIndex = draft.dialogStack.findIndex(dialog => dialog.Element.name === name);
		draft.dialogStack.splice(dialogIndex, 1);
	})
  });

export const useDialogs = createSelectors(
	create<DialogCallerState>()(immer(state))
);