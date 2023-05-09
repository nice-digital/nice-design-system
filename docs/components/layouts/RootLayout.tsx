import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@nice-digital/nds-container";
import { Footer } from "@nice-digital/global-nav";
import styles from "./RootLayout.module.scss";
export interface RootLayoutProps {
	children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<Container>
				<header className={styles.header}>
					<Link href="/">
						<Image
							src="/images/ds-logo-teal.svg"
							alt="NICE Design System home"
							className={styles.logo}
							width={438}
							height={52}
						/>
					</Link>
				</header>

				<main>{children}</main>
			</Container>
			<Footer />
		</>
	);
}
