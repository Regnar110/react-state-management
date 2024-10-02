import { useRef } from 'react'
import { Container } from '../shared/components/Container'
import { PersonsContext, PersonsProvider } from './store/storeContext'
import { createPersonStore } from './store/store'
import { PersonAge } from './components/PersonAge'
import { PersonName } from './components/PersonName'
import { PersonsController } from './components/PersonsController'
import { PersonSurname } from './components/PersonSurname'


const initPersonStoreState = [
	{
		name: 'John',
		surname: 'Doe',
		age: 24,
		city: 'Gdańsk'
	},
	{
		name: 'John2',
		surname: 'Doe2',
		age: 24,
		city: 'Gdańsk'
	},
	{
		name: 'John3',
		surname: 'Doe3',
		age: 24,
		city: 'Gdańsk'
	},	{
		name: 'John4',
		surname: 'Doe4',
		age: 24,
		city: 'Gdańsk'
	}
]
export const StoreWithPropsExample = () => {
	return (
		<PersonsProvider persons={initPersonStoreState}>
			<Container>
				<h1>
					{'Store with props example'}
				</h1>
				<span>
					{'https://zustand.docs.pmnd.rs/guides/initialize-state-with-props'}
				</span>
				<PersonsController />
				<div style={{ display: 'flex', gap: '50px' }}>
					<PersonAge />
					<PersonName />
					<PersonSurname />					
				</div>

			</Container>
		</PersonsProvider>
	);
};