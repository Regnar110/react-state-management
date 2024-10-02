import { usePersonStore } from '../personStore/store';

export const Name = () => {
	const name = usePersonStore.use.name();
	return <span>
		{ name }
	</span>;
};