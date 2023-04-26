import Head from "next/head";
import { SidebarMenu } from "components/menus/SidebarMenu";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import { Grid, GridItem } from "@nice-digital/nds-grid";

export default function Components() {
	return (
		<>
			<Head>
				<title>Components | Nice Design System</title>
			</Head>
			<Breadcrumbs>
				<Breadcrumb to="/">NICE Design System</Breadcrumb>
				<Breadcrumb>Components</Breadcrumb>
			</Breadcrumbs>

			<Grid>
				<GridItem cols={12} md={{ cols: 2 }}>
					<SidebarMenu type="components"></SidebarMenu>
				</GridItem>
				<GridItem cols={12} md={{ cols: 8 }} className="docs-main">
					<h1>Components index page (TODO!)</h1>
				</GridItem>
			</Grid>
		</>
	);
}
