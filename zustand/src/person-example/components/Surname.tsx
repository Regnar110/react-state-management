import { usePersonStore } from '../personStore/store';

export const Surname = () => {
	const surname = usePersonStore.use.surname();
	return <span>
		{ surname }
	</span>;
};