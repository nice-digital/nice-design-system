import Head from "next/head";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { SidebarMenu } from "components/menus/SidebarMenu";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";

export default function Foundations() {
	return (
		<>
			<Head>
				<title>Foundations | Nice Design System</title>
			</Head>
			<Breadcrumbs>
				<Breadcrumb to="/">NICE Design System</Breadcrumb>
				<Breadcrumb>Foundations</Breadcrumb>
			</Breadcrumbs>

			<Grid>
				<GridItem cols={12} md={{ cols: 2 }}>
					<SidebarMenu type="foundations"></SidebarMenu>
				</GridItem>
				<GridItem cols={12} md={{ cols: 8 }} className="docs-main">
					<h1>Foundations index page (TODO!)</h1>
				</GridItem>
			</Grid>
		</>
	);
}
