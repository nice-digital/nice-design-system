import { ReactNode } from "react";
import { Container } from "@nice-digital/nds-container";
import { Header, Footer } from "@nice-digital/global-nav";

export interface RootLayoutProps {
	children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<Header search={false} />
			<Container>
				<main>{children}</main>
			</Container>
			<Footer />
		</>
	);
}
