import Head from "next/head";
import { Accordion, AccordionGroup } from "@nice-digital/nds-accordion";
import { Accordion as TestAccordion } from "../../components/nds-accordion/src/Accordion";
import { Hero } from "../../components/nds-hero/src/Hero";
import { ActionBanner } from "../../components/nds-action-banner/src/ActionBanner";
import { Button } from "../../components/nds-button/src/Button";
export default function Test() {
	const breadcrumb = (
		<div style={{ marginBottom: "2rem" }}>
			<a href="page-one">Home</a>
			<span> &gt; </span>
			<a href="page-two">Go to page two</a>
		</div>
	);
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

			<ActionBanner
				title="This is an action banner"
				variant="fullWidth"
				cta={<Button href="/">Some CTA</Button>}
			>
				<p>This is the intro</p>
			</ActionBanner>

			<ActionBanner
				title="This is an action banner"
				variant="fullWidthSubtle"
				cta={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
				headingLevel={1}
			>
				<p>This is the intro</p>
			</ActionBanner>

			<ActionBanner
				title="This is an action banner"
				variant="fullWidthSubtle"
				cta={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
				headingLevel={3}
			>
				<p>This is the intro</p>
			</ActionBanner>
			<ActionBanner
				title="This is an action banner"
				variant="fullWidthSubtle"
				cta={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
				headingLevel={4}
			>
				<p>This is the intro</p>
			</ActionBanner>
			<ActionBanner
				title="This is an action banner"
				variant="fullWidthSubtle"
				cta={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
				headingLevel={5}
			>
				<p>This is the intro</p>
			</ActionBanner>
			<ActionBanner
				title="This is an action banner"
				variant="fullWidthSubtle"
				cta={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
				headingLevel={6}
			>
				<p>This is the intro</p>
			</ActionBanner>
			{/* <Hero
				header={breadcrumb}
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
				header={breadcrumb}
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
				header={breadcrumb}
				title="This is a hero title"
				intro="This is a hero intro"
				actions={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
			/>

			<Hero
				header={breadcrumb}
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
				header={breadcrumb}
				title="Hero title"
				intro=""
				actions={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
			/>

			<Hero header={breadcrumb} title="Hero title" intro="Hero intro" />
 */}
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
