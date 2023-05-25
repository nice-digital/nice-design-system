import Head from "next/head";
import Link from "next/link";
import { Hero } from "@nice-digital/nds-hero";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Card } from "@nice-digital/nds-card";

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

			<h2>Design Library</h2>
			<p className="lead">
				A reference for all of the design elements used to build digital
				services at NICE.
			</p>

			<Grid>
				<GridItem sm={4}>
					<Card
						headingText="All elements"
						link={{ destination: "/design-library" }}
					>
						Not sure where to start? View the whole library and find the
						elements you need.
					</Card>
				</GridItem>
				<GridItem sm={4}>
					<Card
						headingText="Foundations"
						link={{ destination: "/design-library/#foundations" }}
					>
						Foundations are the design basics that we build our services on,
						including layout, typography and colour.
					</Card>
				</GridItem>
				<GridItem sm={4}>
					<Card
						headingText="Components"
						link={{ destination: "/design-library/#components" }}
					>
						Components are individual design building blocks such as forms,
						filters and menus. They can be combined to build larger patterns and
						pages.
					</Card>
				</GridItem>
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

			<h2>Contact the team</h2>
			<ul>
				<li>
					For questions or help, contact the design system team at{" "}
					<a href="mailto:NICE_Service_Manual@nice.org.uk">
						NICE_Service_Manual@nice.org.uk
					</a>
				</li>
				<li>
					If you work for NICE,{" "}
					<a href="https://teams.microsoft.com/l/team/19%3aj3x65ql6djS-Ro2mM8yQIRzK_QHOk1S3Jl75got7hwk1%40thread.tacv2/conversations?groupId=10c92ff2-b41f-42d1-abef-f34f5bfe1202&tenantId=6030f479-b342-472d-a5dd-740ff7538de9">
						ask us a question in our Teams channel
					</a>
				</li>
			</ul>
		</>
	);
}
