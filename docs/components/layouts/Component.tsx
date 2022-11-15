import { ReactNode } from "react";

export interface ComponentLayoutProps {
	children: ReactNode;
}

export function ComponentLayout({ children }: ComponentLayoutProps) {
	return (
		<>
			<p>Component layout...</p>
			{children}
		</>
	);
}
