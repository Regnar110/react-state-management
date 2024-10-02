import { Container } from '../shared/components/Container';
import { Age } from './components/Age';
import { Controller } from './components/Controller';
import { Name } from './components/Name';
import { Surname } from './components/Surname';

export const PersonStoreExample = () => {
	return (
		<Container>
			<h1>
				{'Simple person store example'}
			</h1>
			<Controller />
			<Name />
			<Age />
			<Surname />
		</Container>
	);
};