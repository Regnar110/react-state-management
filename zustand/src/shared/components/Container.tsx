import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
	return (
		<div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
			{children}
		</div>
	)
}