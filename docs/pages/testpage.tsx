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

			<Accordion
				title={"Accordion title"}
				headingLevel={1}
				displayTitleAsHeading={false}
			>
				<p>test para</p>
			</Accordion>

			<Accordion
				title={"Caution title"}
				variant="caution"
				headingLevel={3}
				displayTitleAsHeading={true}
			>
				<p>test para</p>
			</Accordion>
			<div>
				<AccordionGroup>
					<Accordion
						key="1"
						title="Accordion 1"
						headingLevel={3}
						displayTitleAsHeading={true}
					>
						Accordion 1 body
					</Accordion>
					<Accordion
						key="2"
						title="Accordion 2"
						headingLevel={6}
						displayTitleAsHeading={true}
					>
						Accordion 2 body
					</Accordion>
				</AccordionGroup>
			</div>
		</>
	);
}
