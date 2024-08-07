import Head from "next/head";
import { Accordion, AccordionGroup } from "@nice-digital/nds-accordion";

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

			<Accordion title={"Accordion title"} headingLevel={2}>
				<p>test para</p>
			</Accordion>

			<Accordion title={"Caution title"} variant="caution" headingLevel={3}>
				<p>test para</p>
			</Accordion>
			<Accordion title={"Hello title"} variant="caution" headingLevel={2}>
				<div>
					<h3>Test heading in content</h3>
					<p>Some test paragraph</p>
				</div>
			</Accordion>
			<Accordion title={"Test nested accordion"} headingLevel={2}>
				<div>
					<h3>Test heading in content</h3>
					<p>Some test paragraph</p>
				</div>
				<Accordion
					title={"Hello nested accordion"}
					variant="caution"
					headingLevel={3}
				>
					<div>
						<h3>Test heading in content in nested accordion</h3>
						<p>Some test paragraph</p>
					</div>
				</Accordion>
			</Accordion>
			<div>
				<AccordionGroup>
					<Accordion key="1" title="Accordion 1" headingLevel={3}>
						Accordion 1 body
					</Accordion>
					<Accordion key="2" title="Accordion 2" headingLevel={6}>
						Accordion 2 body
					</Accordion>
					<Accordion title={"Test nested accordion in group"} headingLevel={2}>
						<div>
							<h3>Test heading in content</h3>
							<p>Some test paragraph</p>
						</div>
						<Accordion
							title={"Hello nested accordion in group"}
							variant="caution"
							headingLevel={3}
						>
							<div>
								<h3>Test heading in content in nested accordion</h3>
								<p>Some test paragraph</p>
							</div>
						</Accordion>
					</Accordion>
				</AccordionGroup>
			</div>
		</>
	);
}
