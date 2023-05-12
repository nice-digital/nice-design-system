import Head from "next/head";

import { FullBleed, fullBleedVariants } from "@nice-digital/nds-full-bleed";
import { Container } from "@nice-digital/nds-container";

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

			<h2>Full bleed (default)</h2>
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
