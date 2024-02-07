import Head from "next/head";

import { FullBleed, fullBleedVariants } from "@nice-digital/nds-full-bleed";
import { Hero } from "@nice-digital/nds-hero";
import { InPageNav } from "@nice-digital/nds-in-page-nav";
import { Container } from "@nice-digital/nds-container";
import { PageHeader } from "@nice-digital/nds-page-header";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";

export default function Test() {
	return (
		<>
			<Head>
				<title>NDS Test page!</title>
			</Head>
			<h1>Test page!</h1>
			<p>
				We can use this page as a scratch pad for developing/testing components
				outside of the docs.
			</p>
			<p>
				MDX files don&apos;t have great Typescript integration, so it can
				sometimes be hard to debug components using MDX alone.
			</p>

			<h2>Hero</h2>
			<Hero title="Hello!" header={<p>Bread</p>} />

			<Hero
				title="Should have minimum height"
				image="/images/hero-bg.jpg"
				header={<p>Breadcrumbs here</p>}
				intro={<p>Lots of summary text here</p>}
				actions={<a className="btn btn--cta">I am a button</a>}
				isDark={true}
			/>

			<Hero title="No minimum height here" />

			<h2>Standard page header</h2>
			<PageHeader
				heading="Standard"
				breadcrumbs={<div data-this="that">Breadcrumbs here</div>}
				description={<div className="test">I am a description!!!!!!!!</div>}
			/>

			<h2>Full width dark page header</h2>
			<PageHeader
				heading="Full width dark"
				variant="fullWidthDark"
				breadcrumbs={
					<Breadcrumbs>
						<Breadcrumb to="https://www.nice.org.uk/">Home</Breadcrumb>
						<Breadcrumb to="https://www.nice.org.uk/guidance">
							NICE guidance
						</Breadcrumb>
						<Breadcrumb>Published</Breadcrumb>
					</Breadcrumbs>
				}
				description={<div className="test">I am a description!!!!!!!!</div>}
			/>

			<h2>Full width light page header</h2>
			<PageHeader
				heading="Full width light"
				variant="fullWidthLight"
				breadcrumbs={
					<Breadcrumbs>
						<Breadcrumb to="https://www.nice.org.uk/">Home</Breadcrumb>
						<Breadcrumb to="https://www.nice.org.uk/guidance">
							NICE guidance
						</Breadcrumb>
						<Breadcrumb>Published</Breadcrumb>
					</Breadcrumbs>
				}
				description={<div className="test">I am a description!!!!!!!!</div>}
			/>

			<h2>Second section page header</h2>
			<PageHeader
				heading="There's a second section here!"
				variant="fullWidthLight"
				secondSection={
					<aside>
						<h3>I am a second section</h3>
						<ol>
							<li>One</li>
							<li>Two</li>
							<li>Three</li>
						</ol>
					</aside>
				}
			/>

			<h2>In-page nav (no scroll)</h2>

			<InPageNav noScroll />

			<h2>In-page nav (no scroll, two cols)</h2>

			<InPageNav noScroll twoColumns />

			<h2>
				Full bleed (default) with a really massive title that should hopefully
				run onto the next line and maybe beyond
			</h2>
			<FullBleed>
				<h3>Full bleed heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					id massa pellentesque, bibendum risus in, interdum nibh.
				</p>
			</FullBleed>

			<h2>Full bleed (with container)</h2>
			<FullBleed>
				<Container>
					<p>Content here</p>
				</Container>
			</FullBleed>

			<h2>Full bleed (dark)</h2>
			<FullBleed variant={fullBleedVariants.dark}>
				<h3>Full bleed heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					id massa pellentesque, bibendum risus in, interdum nibh.
				</p>
			</FullBleed>

			<h2>Full bleed (light)</h2>
			<FullBleed variant={fullBleedVariants.light}>
				<h3>Full bleed heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					id massa pellentesque, bibendum risus in, interdum nibh.
				</p>
			</FullBleed>

			<h2>Full bleed (transparent)</h2>
			<FullBleed variant={fullBleedVariants.transparent}>
				<h3>Full bleed heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					id massa pellentesque, bibendum risus in, interdum nibh.
				</p>
			</FullBleed>

			<h2>Full bleed (image dark)</h2>
			<FullBleed
				variant={fullBleedVariants.imageDark}
				backgroundImage="https://picsum.photos/1000/500"
			>
				<h3>Full bleed heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					id massa pellentesque, bibendum risus in, interdum nibh.
				</p>
			</FullBleed>

			<h2>Full bleed (image light)</h2>
			<FullBleed
				variant={fullBleedVariants.imageLight}
				backgroundImage="https://picsum.photos/1000/500"
			>
				<h3>Full bleed heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					id massa pellentesque, bibendum risus in, interdum nibh.
				</p>
			</FullBleed>
		</>
	);
}
