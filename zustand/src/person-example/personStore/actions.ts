import { usePersonStore } from './store';

export const setName = (newName: string) => usePersonStore.setState(draft => {
	draft.name = newName;
});
export const setSurname = (newSurname: string) => usePersonStore.setState(draft => {
	draft.surname = newSurname;
});
export const setAge = (newAge: number) => usePersonStore.setState(draft => {
	draft.age = newAge;
});