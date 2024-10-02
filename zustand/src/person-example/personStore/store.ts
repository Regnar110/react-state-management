import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createSelectors } from '../../utils/createSelectors';
import { devtools } from 'zustand/middleware';

type State = {
	name: string;
	surname: string;
	age: number;
  };


const state = () => ({
	name: 'John Doe',
	surname: 'doe Doe',
	age: 15
});
const middlewareComposition = () => {
	return devtools(
		immer(
			state
		)
	);
};
export const usePersonStore = createSelectors(
	create<State>()(
		middlewareComposition()
	)
);