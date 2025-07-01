import Head from "next/head";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Card } from "@nice-digital/nds-card";
import { PageHeader } from "@nice-digital/nds-page-header";

import { type PageData } from "types/PageData";
import { components } from "../data/components";
import { foundations } from "../data/foundations";

export default function DesignLibrary() {
	return (
		<>
			<Head>
				<title>Design Library | NICE Design System</title>
			</Head>
			<Breadcrumbs>
				<Breadcrumb to="/">NICE Design System</Breadcrumb>
				<Breadcrumb>Design Library</Breadcrumb>
			</Breadcrumbs>

			<PageHeader
				heading="Design Library"
				lead="A reference for all the components, foundations and patterns in the NICE design system"
			/>

			<h2 id="foundations">Foundations</h2>
			<p className="lead">
				Our foundations are the design basics that we build our services on.{" "}
			</p>

			<Grid>
				{foundations.map(
					({ slug, title, description }: PageData, index: number) => (
						<GridItem key={index} sm={4}>
							<Card
								headingText={title}
								link={{ destination: `/foundations/${slug}` }}
							>
								{description && <p>{description}</p>}
							</Card>
						</GridItem>
					)
				)}
			</Grid>

			<hr />

			<h2 id="components">Components</h2>
			<p className="lead">
				Components are individual design building blocks. They can be combined
				to create larger patterns and pages.
			</p>

			<Grid>
				{components.map(
					({ slug, title, description }: PageData, index: number) => (
						<GridItem key={index} sm={4}>
							<Card
								headingText={title}
								link={{ destination: `/components/${slug}` }}
							>
								{description && <p>{description}</p>}
							</Card>
						</GridItem>
					)
				)}
			</Grid>
		</>
	);
}
