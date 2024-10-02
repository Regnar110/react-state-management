import { createContext, ReactNode, useRef } from 'react';
import { createPersonStore, Person, PersonStore } from './store';

export const PersonsContext = createContext<PersonStore | null>(null);

export const PersonsProvider = ({ children, persons }:{ children: ReactNode, persons: Array<Person> }) => {
	const storeRef = useRef<PersonStore>();
	if (!storeRef.current) {
		storeRef.current = createPersonStore(persons);
	}

	return (
		<PersonsContext.Provider value={storeRef.current}>
			{children}
		</PersonsContext.Provider>
	)
}
