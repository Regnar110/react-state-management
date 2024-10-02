import { useEffect, useRef, useState } from 'react';
import { useDialogs } from '../store/store';
import { DialogTwo } from './DialogTwo';

export const DialogOne = ({ propsOne }: { propsOne: string }) => {
	const callDialog = useDialogs.use.callDialog();
	const terminateDialog = useDialogs.use.terminateDialog();
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		dialogRef.current?.showModal();
	});

	const closeDialog = () => {
		terminateDialog(DialogOne);
		dialogRef.current?.close();
	};

	return (
		<dialog ref={dialogRef}>
			<div>
				<h2>DIALOG ONE</h2>
				<button onClick={closeDialog}>Close me</button>
				<button onClick={() => callDialog({ Element: DialogTwo, props: null })}>Open dialog two</button>
				<span>{propsOne}</span>
			</div>
		</dialog>
	)
}