import { setName, setSurname, setAge } from '../personStore/actions';


export const Controller = () => {

	const setNameHandler = () => setName(Math.random().toString());
	
	const setSurnameHandler = () => setSurname(Math.random().toString());

	const setAgeHandler = () => setAge(+Math.random().toFixed(1));

	return (
		<>
			<button onClick={setNameHandler}>
				{'Set Name'}
			</button>
			<button onClick={setSurnameHandler}>
				{'Set Surname'}
			</button>
			<button onClick={setAgeHandler}>
				{'Set Age'}
			</button>
		</>
	);
};