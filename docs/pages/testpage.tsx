import Head from "next/head";
import { Accordion, AccordionGroup } from "@nice-digital/nds-accordion";
import { Accordion as TestAccordion } from "../../components/nds-accordion/src/Accordion";
import { Hero } from "../../components/nds-hero/src/Hero";
import { Button } from "../../components/nds-button/src/Button";
export default function Test() {
	return (
		<div>
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

			<Hero
				header="Breadcrumb"
				title="This is a hero title"
				intro="This is a hero intro"
				description="This is a hero description"
				actions={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
			/>

			<Hero
				header="Breadcrumb cta title description. no intro"
				title="Hero title"
				intro=""
				description="This is a hero description"
				actions={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
			/>

			<Hero
				header="Breadcrumb title intro and cta"
				title="This is a hero title"
				intro="This is a hero intro"
				actions={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
			/>

			<Hero
				header="Breadcrumb no title. cta intro description"
				title=""
				intro="This is a hero intro"
				description="This is a hero description"
				actions={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
			/>

			<Hero
				header="Breadcrumb cta no intro no description"
				title="Hero title"
				intro=""
				actions={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
			/>

			<Hero header="Breadcrumb no cta" title="Hero title" intro="Hero intro" />

			<h2>Accordion default variant</h2>

			<Accordion title={"Accordion title"}>
				<p>test para subtle variant by default</p>
			</Accordion>

			<Accordion title={"Accordion title"} variant="callout">
				<p>test para callout variant</p>
			</Accordion>

			<Accordion title={"Accordion title"} variant="caution">
				<p>test para caution variant</p>
			</Accordion>

			<Accordion
				title={"Accordion with headingLevel and displayTitleAsHeading true"}
				displayTitleAsHeading={true}
				headingLevel={2}
			>
				<p>test para</p>
			</Accordion>

			<Accordion
				title={"Accordion title"}
				displayTitleAsHeading={true}
				headingLevel={2}
			>
				<p>test para</p>
			</Accordion>

			<Accordion
				title={"Caution title"}
				displayTitleAsHeading={true}
				variant="caution"
				headingLevel={3}
			>
				<p>test para</p>
			</Accordion>

			<Accordion
				title={"Hello title"}
				variant="caution"
				displayTitleAsHeading={true}
				headingLevel={2}
			>
				<div>
					<h3>Test heading in content</h3>
					<p>Some test paragraph</p>
				</div>
			</Accordion>
			<Accordion
				title={"Test nested accordion"}
				displayTitleAsHeading={true}
				headingLevel={2}
			>
				<div>
					<h3>Test heading in content</h3>
					<p>Some test paragraph</p>
				</div>
				<Accordion
					title={"Hello nested accordion"}
					variant="caution"
					displayTitleAsHeading={true}
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
					<Accordion
						key="1"
						title="Accordion 1"
						displayTitleAsHeading={true}
						headingLevel={3}
					>
						Accordion 1 body
					</Accordion>
					<Accordion
						key="2"
						title="Accordion 2"
						displayTitleAsHeading={true}
						headingLevel={6}
					>
						Accordion 2 body
					</Accordion>
					<Accordion
						title={"Test nested accordion in group"}
						displayTitleAsHeading={true}
						headingLevel={2}
					>
						<div>
							<h3>Test heading in content</h3>
							<p>Some test paragraph</p>
						</div>
						<Accordion
							title={"Hello nested accordion in group"}
							variant="caution"
							displayTitleAsHeading={true}
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
		</div>
	);
}
