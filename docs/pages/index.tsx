import Head from "next/head";
import Link from "next/link";
import { Hero } from "@nice-digital/nds-hero";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import { type PageData } from "types/PageData";
import { components } from "../data/components";
import { foundations } from "../data/foundations";

export default function Home() {
	return (
		<>
			<Head>
				<title>Nice Design System</title>
				<meta
					name="description"
					content="Create consistent and on-brand digital services"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero
				title="NICE Design System: Design and build digital services at NICE"
				intro="Guides, resources and assets to build accessible, usable, on-brand services at NICE."
				header={
					<Breadcrumbs>
						<Breadcrumb to="/">NICE Design System</Breadcrumb>
					</Breadcrumbs>
				}
			/>

			<h2>How to use the NICE design system</h2>
			<p>TODO: Add content about prototyping &amp; code</p>

			<hr />

			<h2>Foundations</h2>
			<p className="lead">
				Our foundations are the design basics that we build our services on.
			</p>

			<Grid>
				{foundations.map(
					({ slug, title, description }: PageData, index: number) => (
						<GridItem key={index} sm={4}>
							<h3>{title}</h3>
							{description && <p>{description}</p>}
						</GridItem>
					)
				)}
			</Grid>

			<hr />

			<h2>Components</h2>
			<p className="lead">
				Components are individual design building blocks. They can be combined
				to create larger patters and pages.
			</p>

			<Grid>
				{components.map(
					({ slug, title, description }: PageData, index: number) => (
						<GridItem key={index} sm={4}>
							<h3>
								<Link href={`/components/${slug}`}>{title}</Link>
							</h3>
							{description && <p>{description}</p>}
						</GridItem>
					)
				)}
			</Grid>

			<hr />

			<h2>Patterns</h2>
			<p>TODO: Add patterns content</p>

			<hr />

			<h2>Contact the team</h2>
			<ul>
				<li>Link to Teams channel</li>
				<li>Link to Github discussions</li>
				<li>Link to process map</li>
			</ul>
		</>
	);
}
