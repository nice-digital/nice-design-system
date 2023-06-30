import { ReactNode } from "react";
import Head from "next/head";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import { type PageMeta } from "types/PageMeta";

export interface StackedNavLayoutProps {
	children: ReactNode;
	meta: PageMeta;
}

export const StackedNavLayout: React.FC<StackedNavLayoutProps> = ({
	children,
	meta
}: StackedNavLayoutProps) => {
	const Menu: React.FC = meta.menu as React.FC;

	return (
		<>
			<Head>
				<title>{`${meta.title} | NICE Design System`}</title>
			</Head>
			<Breadcrumbs>
				<Breadcrumb to="/">NICE Design System</Breadcrumb>
				<Breadcrumb>{meta.title}</Breadcrumb>
			</Breadcrumbs>

			<h1>{meta.title}</h1>

			<Grid>
				<GridItem cols={12} md={{ cols: 2 }}>
					{meta.menu && <Menu />}
				</GridItem>
				<GridItem cols={12} md={{ cols: 10 }} className="main-content">
					{children}
				</GridItem>
			</Grid>
		</>
	);
};
