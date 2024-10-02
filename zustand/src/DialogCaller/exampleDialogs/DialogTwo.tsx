import { useEffect, useRef, useState } from 'react';
import { useDialogs } from '../store/store';

export const DialogTwo = () => {
	const terminateDialog = useDialogs.use.terminateDialog();
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		dialogRef.current?.showModal();
	});

	const closeDialog = () => {
		terminateDialog('DialogTwo');
		dialogRef.current?.close();
	};

	return (
		<dialog ref={dialogRef}>
			<div>
				<h2>DIALOG TWO</h2>
				<button onClick={closeDialog}>Close me</button>
			</div>
		</dialog>
	)
}