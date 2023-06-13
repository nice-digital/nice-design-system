import { ReactNode } from "react";
import Head from "next/head";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import { InPageNav } from "@nice-digital/nds-in-page-nav";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import { type PageMeta } from "types/PageMeta";

export interface DefaultLayoutProps {
	children: ReactNode;
	meta: PageMeta;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
	children,
	meta
}: DefaultLayoutProps) => {
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
				<GridItem cols={12} md={{ cols: 10 }} className="main-content">
					{children}
				</GridItem>
				<GridItem cols={12} md={{ cols: 2 }}>
					<InPageNav
						headingsContainerSelector=".main-content"
						headingsExcludeSelector=".exclude-in-page-nav"
						headingsExcludeContainer=".exclude-container"
					/>
				</GridItem>
			</Grid>
		</>
	);
};
