import { ReactNode } from "react";
import Head from "next/head";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import { InPageNav } from "@nice-digital/nds-in-page-nav";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import { type PageMeta } from "types/PageMeta";
import { SidebarMenu } from "components/menus/SidebarMenu";
import { ComponentHeader } from "components/ComponentHeader/ComponentHeader";
import { capitalise } from "utils/utils";

export interface ComponentLayoutProps {
	children: ReactNode;
	meta: PageMeta;
	type: "foundations" | "components";
}

export const ComponentLayout: React.FC<ComponentLayoutProps> = ({
	children,
	meta,
	type = "components"
}: ComponentLayoutProps) => {
	return (
		<>
			<Head>
				<title>{`${meta.title} | NICE Design System`}</title>
			</Head>
			<Breadcrumbs>
				<Breadcrumb to="/">NICE Design System</Breadcrumb>
				<Breadcrumb to={`/${type}`}>{capitalise(type)}</Breadcrumb>
				<Breadcrumb>{meta.title}</Breadcrumb>
			</Breadcrumbs>
			<Grid>
				<GridItem cols={12} md={{ cols: 2 }}>
					<SidebarMenu type={type}></SidebarMenu>
				</GridItem>
				<GridItem cols={12} md={{ cols: 8 }} className="docs-main">
					<ComponentHeader {...meta} />
					{children}
				</GridItem>
				<GridItem cols={12} md={{ cols: 2 }}>
					<InPageNav
						headingsContainerSelector=".docs-main"
						headingsExcludeSelector=".exclude-in-page-nav"
					/>
				</GridItem>
			</Grid>
		</>
	);
};
