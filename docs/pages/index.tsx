import Head from "next/head";
import Link from "next/link";
import { Hero } from "@nice-digital/nds-hero";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Card } from "@nice-digital/nds-card";

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
				title="Design and build digital services at NICE"
				intro="Guides, resources and assets to build accessible, usable, on-brand services at NICE."
				header={
					<Breadcrumbs>
						<Breadcrumb to="/">NICE Design System</Breadcrumb>
					</Breadcrumbs>
				}
			/>

			<h2 className="mt--0">How to use the NICE design system</h2>
			<Grid>
				<GridItem sm={6}>
					<h3>In code</h3>
					<p>Import components and styles directly into your project.</p>
					<a href="#development">Read more about development</a>
				</GridItem>
				<GridItem sm={6}>
					<h3>In design prototypes</h3>
					<p>Use our Figma files to build prototypes.</p>
					<a href="#prototyping">Read more about prototyping</a>
				</GridItem>
			</Grid>

			<hr />

			<h2>Foundations</h2>
			<p className="lead">
				Our foundations are the design basics that we build our services on.
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

			<h2>Components</h2>
			<p className="lead">
				Components are individual design building blocks. They can be combined
				to create larger patters and pages.
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

			<hr />

			<h2 id="development">Development</h2>
			<Grid>
				<GridItem sm={4}>
					<h3>Github</h3>
					<p>
						<Link href="https://github.com/nice-digital/nice-design-system">
							Check out the NDS GitHub repo
						</Link>{" "}
						to read technical documentation and inspect the code
					</p>
				</GridItem>
				<GridItem sm={4}>
					<h3>NPM</h3>
					<p>
						<Link href="https://www.npmjs.com/package/@nice-digital/design-system">
							Install the node package using NPM
						</Link>{" "}
						to import styles and components into your project
					</p>
				</GridItem>
				<GridItem sm={4}>
					<h3>CDN</h3>
					<p>
						If you can&apos;t use NPM, you can{" "}
						<Link href="https://cdn.nice.org.uk/niceorg/css/app.min.css">
							import the design system styles directly via the CDN
						</Link>
					</p>
				</GridItem>
			</Grid>

			<hr />

			<h2>Patterns</h2>
			<p>TODO: Add patterns content</p>

			<hr />

			<h2 id="prototyping">Prototyping</h2>
			<p>TODO: Add prototyping content</p>

			<hr />

			<h2>Contact the team</h2>
			<ul>
				<li>
					If you work for NICE,{" "}
					<a href="https://teams.microsoft.com/l/team/19%3aj3x65ql6djS-Ro2mM8yQIRzK_QHOk1S3Jl75got7hwk1%40thread.tacv2/conversations?groupId=10c92ff2-b41f-42d1-abef-f34f5bfe1202&tenantId=6030f479-b342-472d-a5dd-740ff7538de9">
						ask us a question in our Teams channel
					</a>
				</li>{" "}
				<li>
					If you work outside of NICE, you can get in touch via{" "}
					<a href="https://github.com/nice-digital/nice-design-system/discussions">
						Github discussions
					</a>
				</li>
				<li>TODO: Add process map</li>
			</ul>
		</>
	);
}
