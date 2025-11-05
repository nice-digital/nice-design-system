import Head from "next/head";
import { RootLayout } from "components/layouts/RootLayout";
import { Accordion, AccordionGroup } from "@nice-digital/nds-accordion";
import { Accordion as TestAccordion } from "../../components/nds-accordion/src/Accordion";
import { Hero } from "../../components/nds-hero/src/Hero";
import { ActionBanner } from "../../components/nds-action-banner/src/ActionBanner";
import { Button } from "../../components/nds-button/src/Button";
import { Card } from "@nice-digital/nds-card";

import {
	FormGroup,
	FormGroupProps
} from "../../components/nds-form-group/src/FormGroup";
import {
	Checkbox,
	CheckboxProps
} from "../../components/nds-checkbox/src/Checkbox";
import {
	DefaultCheckbox,
	DefaultExampleCheckbox,
	InlineCheckbox,
	HintCheckbox,
	ErrorCheckbox,
	DisabledCheckbox
} from "../components/examples/Checkbox";

import {
	DefaultFilterSummary,
	DefaultFilterPanel,
	DefaultFilterByInput,
	DefaultMultipleFilters
} from "components/examples/Filters";

export default function Test() {
	const breadcrumb = (
		<div style={{ marginBottom: "2rem" }}>
			<a href="page-one">Home</a>
			<span> &gt; </span>
			<a href="page-two">Go to page two</a>
			<span> &gt; </span>
			<a href="page-three">Go to page three</a>
			<span> &gt; </span>
			<a href="page-four">Go to page four</a>
			<span> &gt; </span>
			<a href="page-five">
				Go to page five with a really really long breadcrumb
			</a>
		</div>
	);
	return (
		<div className="test-page">
			<Head>
				<title>NDS Test page!</title>
				<link rel="stylesheet" href="../styles/testpage.scss" />
			</Head>

			<h1>Test page!</h1>

			<div className="test-checkbox-directly">
				<h2>Example one </h2>
				<p>
					Using box-sizing:border-box, so the border insets rather than outset
					(which can cause )
				</p>
				{/* <Checkbox value="test" name="a-test-checkbox-test" /> */}
				<>
					<Checkbox value="Email" name="contact-email-test-1" />
					<Checkbox value="Telephone" name="contact-phone-test-1" />
					<Checkbox value="Text Message" name="contact-text-test-1" />
				</>

				<>
					<Checkbox value="Email" name="contact-email-example-test-1" />
					<Checkbox value="Telephone" name="contact-phone-example-test-1" />
					<Checkbox value="Text Message" name="contact-text-example-test-1" />
				</>

				<>
					<Checkbox inline value="Email" name="contact-email-inline-test-1" />
					<Checkbox
						inline
						value="Telephone"
						name="contact-phone-inline-test-1"
					/>
					<Checkbox
						inline
						value="Text Message"
						name="contact-text-inline-test-1"
					/>
				</>

				<Checkbox
					hint="You can unsubscribe at any time"
					value="Email"
					name="contact-email-hint-test-1"
				/>

				<Checkbox
					error="This is an error message"
					value="Email"
					name="contact-email-error-test-1"
				/>

				<Checkbox disabled value="Email" name="contact-email-disabled-test-1" />
			</div>

			<div className="test-examples-section-one">
				<h2>Example two</h2>
				<p>
					We apply an offset to the outline by default. The hover state grows
					into the offset whitespace when both states are present.
				</p>
				<DefaultExampleCheckbox />
				<DefaultCheckbox />
				<InlineCheckbox />
				<HintCheckbox />
				<ErrorCheckbox />
				<DisabledCheckbox />
			</div>

			<div className="test-examples-section-two">
				<h2>Example 3</h2>

				<p>Offset the outline when focus & hover are both present</p>
				<>
					<Checkbox value="Email" name="contact-email-test" />
					<Checkbox value="Telephone" name="contact-phone-test" />
					<Checkbox value="Text Message" name="contact-text-test" />
				</>

				<>
					<Checkbox value="Email" name="contact-email-example-test" />
					<Checkbox value="Telephone" name="contact-phone-example-test" />
					<Checkbox value="Text Message" name="contact-text-example-test" />
				</>

				<>
					<Checkbox inline value="Email" name="contact-email-inline-test" />
					<Checkbox inline value="Telephone" name="contact-phone-inline-test" />
					<Checkbox
						inline
						value="Text Message"
						name="contact-text-inline-test"
					/>
				</>

				<Checkbox
					hint="You can unsubscribe at any time"
					value="Email"
					name="contact-email-hint-test"
				/>

				<Checkbox
					error="This is an error message"
					value="Email"
					name="contact-email-error-test"
				/>

				<Checkbox disabled value="Email" name="contact-email-disabled-test" />
			</div>

			<br />
			<br />

			<p>
				We can use this page as a scratch pad for developing/testing components
				outside of the docs.
			</p>
			<p>
				MDX files don&apos;t have great Typescript integration, so it can
				sometimes be hard to debug components using MDX alone.
			</p>

			<Card
				headingText="Card with heading level 6"
				headingLevel={6}
				link={{
					destination: "https://www.example.com"
				}}
				summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisi enim. In nec lorem ac est cursus sollicitudin molestie vel nunc."
			/>
			<Card
				headingText="Card with heading level 2"
				headingLevel={2}
				link={{
					destination: "https://www.example.com"
				}}
				summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisi enim. In nec lorem ac est cursus sollicitudin molestie vel nunc."
			/>

			<Card
				headingText="Card with no heading level set"
				link={{
					destination: "https://www.example.com"
				}}
				summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisi enim. In nec lorem ac est cursus sollicitudin molestie vel nunc."
			/>

			<br />
			<br />
			<br />
			<br />
			<br />
			<Hero
				header={breadcrumb}
				title="This is a hero title"
				intro="This is a hero intro"
				description="This is a hero description"
				actions={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
				isDark={true}
			/>
			<Hero
				header={breadcrumb}
				title="This is a hero title"
				intro="This is a hero intro"
				description="This is a hero description"
				actions={
					<Button href="/" variant="primary">
						Some CTA
					</Button>
				}
				image="/images/hero-bg.jpg"
			/>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />

			{/* <ActionBanner
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
			</ActionBanner> */}

			<h4>NDS-444 Example: full width subtle action banner (with image)</h4>
			<ActionBanner
				variant="fullWidthSubtle"
				title="Full width subtle action banner with image"
				cta={<Button>A button</Button>}
				image="https://placehold.co/800x1200"
			>
				<p>
					This is the intro.This is <a href="#">some content with a link</a>
				</p>
			</ActionBanner>

			<h4>NDS-444 Example: full width action banner (with image)</h4>
			<ActionBanner
				variant="fullWidth"
				title="Full width action banner with image"
				cta={<Button>A button</Button>}
				image="https://placehold.co/800x1200"
			>
				<p>
					This is the intro.This is <a href="#">some content with a link</a>
				</p>
			</ActionBanner>
			{/*<Hero
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
