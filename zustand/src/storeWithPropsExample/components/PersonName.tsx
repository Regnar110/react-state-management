import { Container } from '../../shared/components/Container';
import { usePersonsStore } from '../hooks/usePersonsStore';

export const PersonName = () => {

	const persons = usePersonsStore().use.persons();
	return (
		<Container>
			<h2>
				{'NAME'}
			</h2>
			{
				persons.map(person => <span key={person.name}>
					{person.name}
				</span>)
			}
		</Container>			
	);
};