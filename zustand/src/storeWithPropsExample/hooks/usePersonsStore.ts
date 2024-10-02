import { useContext } from 'react';
import { PersonsContext } from '../store/storeContext';

export const usePersonsStore = () => {
	const store = useContext(PersonsContext);
	if (!store) throw new Error('Missing PersonsContext.Provider in the tree');
	return {
		...store,
		use: store.use
	};
};