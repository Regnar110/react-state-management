import { createStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createStoreSelectors, WithCreateStoreSelectors } from '../../utils/createSelectors';

export interface Person {
	name: string;
	surname: string;
	age: number;
	city: string;
}
  
export interface PersonStoreState {
	persons: Array<Person>
	addPerson: (newPerson: Person) => void;
	removePerson: (personName: string) => void;
	changePersonName: (prevPeronName: string, newName: string) => void;
}

export type PersonStore = WithCreateStoreSelectors<ReturnType<typeof createPersonStore>>;

export const createPersonStore = (initState: Array<Person>) => {
	return createStoreSelectors(createStore<PersonStoreState>()(
		immer((set) => ({
			persons: initState,
			addPerson: newPerson => set((draft) => {
				draft.persons.push(newPerson);
			}),
			removePerson: personName => set((draft) => {
				const index = draft.persons.findIndex(person => person.name === personName);
				draft.persons.slice(index, 1);
			}),
			changePersonName: (prevPeronName:string, newName: string) => set((draft) => {
				const personIndex = draft.persons.findIndex(person => person.name === prevPeronName);
				draft.persons[personIndex].name = newName;
			})
		}))
	));
};
