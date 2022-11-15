import { ReactNode } from "react";

export interface RootLayoutProps {
	children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<p>Root layout...</p>
			<main>{children}</main>
		</>
	);
}
