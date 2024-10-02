import { usePersonsStore } from '../hooks/usePersonsStore';

export const PersonsController = () => {
	const addPerson = usePersonsStore().use.addPerson();
	const changePersonName = usePersonsStore().use.changePersonName();
	const handleAddNewPerson = () => {
		addPerson({
			name: `John${Math.random().toFixed(3).toString()}`,
			surname: 'Doe',
			age: +Math.random().toFixed(),
			city: 'Gdask'
		});
	};

	const handleRemovePerson = () => undefined;
	const handleChangePersonName = () => {
		changePersonName('John', `John${Math.random().toFixed(3).toString()}`)
	};

	return (
		<div style={{ display: 'fex' }}>
			<button onClick={handleAddNewPerson}>
				{'Add new person'}
			</button>
			<button onClick={handleChangePersonName}>
				{'Change person name'}
			</button>
			<button onClick={handleRemovePerson}>
				{'Remvoe person'}
			</button>
		</div>
	);
};