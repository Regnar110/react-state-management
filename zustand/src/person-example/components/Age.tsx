import { usePersonStore } from '../personStore/store';

export const Age = () => {
	const age = usePersonStore.use.age();
	return <span>
		{ age }
	</span>;
};