import { Container } from '../../shared/components/Container';
import { usePersonsStore } from '../hooks/usePersonsStore';

export const PersonAge = () => {

	const persons = usePersonsStore().use.persons();
	return (
		<Container>
			<h2>
				{'AGE'}
			</h2>
			{
				persons.map(person => <span key={person.name}>
					{person.age}
				</span>)
			}
		</Container>			
	);
};