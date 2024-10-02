import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { PersonStoreExample } from './person-example/PersonStoreExample';
import { StoreWithPropsExample } from './storeWithPropsExample/StoreWithPropsExample';
import { DialogCaller } from './DialogCaller/DialogCaller';

const root = document.getElementById('root')!;
createRoot(root).render(
	<StrictMode>
		<PersonStoreExample />
		<StoreWithPropsExample />
		<DialogCaller />
	</StrictMode>
);
