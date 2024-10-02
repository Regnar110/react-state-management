import { createPortal } from 'react-dom';
import { DialogOne } from './exampleDialogs/DialogOne';
import { useDialogs } from './store/store';

export const DialogCaller = () => {
	const callDialog = useDialogs.use.callDialog();
	const dialogStack = useDialogs.use.dialogStack();
	console.log(dialogStack)
	const open = () => callDialog({ Element: DialogOne, props: { propsOne: 'dupa' } });
	return (
		<>
			<button onClick={open}>call Dialog</button>
			{
				dialogStack.map(({ Element, props }) => createPortal(<Element {...props} />, document.body))
			}
		</>
	)
};