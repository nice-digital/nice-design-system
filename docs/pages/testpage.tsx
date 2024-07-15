import Head from "next/head";
import { Accordion } from "@nice-digital/nds-accordion";

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

			<h2>Accordion default variant</h2>
			{/* <Accordion title={<h3>Some title</h3>}>
				<p>Body content</p>
			</Accordion> */}

			<Accordion title={<h3>Some title</h3>}>
				<p>test para</p>
			</Accordion>
		</>
	);
}
