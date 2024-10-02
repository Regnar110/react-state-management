import { Container } from '../../shared/components/Container';
import { usePersonsStore } from '../hooks/usePersonsStore';

export const PersonSurname = () => {

	const persons = usePersonsStore().use.persons();
	return (
		<Container>
			<h2>
				{'SURNAME'}
			</h2>
			{
				persons.map(person => <span key={person.name}>
					{person.surname}
				</span>)
			}
		</Container>			
	);
};