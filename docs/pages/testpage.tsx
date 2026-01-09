import Head from "next/head";
import { Accordion, AccordionGroup } from "@nice-digital/nds-accordion";
import { Accordion as TestAccordion } from "../../components/nds-accordion/src/Accordion";
import { Hero } from "../../components/nds-hero/src/Hero";
import { ActionBanner } from "../../components/nds-action-banner/src/ActionBanner";
import { Button } from "../../components/nds-button/src/Button";
import { Card } from "@nice-digital/nds-card";
import { FormGroup } from "@nice-digital/nds-form-group";
import { Radio } from "@nice-digital/nds-radio";
import Checkbox from "@nice-digital/nds-checkbox";
import { Input } from "@nice-digital/nds-input";
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
			NDS-511 Change Styling on form group component
			<br />
			<br />
			<FormGroup
				legend="Are you happy for us to contact you in the future?"
				name="contact-preference"
			>
				<Radio label="Yes" value="yes" />
				<Radio label="No" value="no" />
			</FormGroup>
			<FormGroup
				legend="Are you happy for us to contact you in the future?"
				name="contact-preference-inline"
				inline
			>
				<Radio label="Yes" value="yes" />
				<Radio label="No" value="no" />
			</FormGroup>
			<FormGroup
				legend="How would you like us to contact you?"
				hint="We promise not to contact you too often"
			>
				<Checkbox label="Email" value="email" name="contact-preference-hints" />
				<Checkbox
					label="Telephone"
					value="phone"
					name="contact-preference-hints"
				/>
			</FormGroup>
			<FormGroup
				legend="How would you like us to contact you?"
				groupError="Please choose at least one contact method!"
			>
				<Checkbox label="Email" value="email" name="contact-preference-error" />
				<Checkbox
					label="Telephone"
					value="phone"
					name="contact-preference-error"
				/>
			</FormGroup>
			Heading level 1
			<FormGroup legend="Personal information" headingLevel={1}>
				<Input label="First name" name="firstname-heading-level" />
				<Input label="Surname" name="surname-heading-level" />
			</FormGroup>
			Heading level 2
			<FormGroup legend="Personal information" headingLevel={2}>
				<Input label="First name" name="firstname-heading-level" />
				<Input label="Surname" name="surname-heading-level" />
			</FormGroup>
			Heading level 3
			<FormGroup legend="Personal information" headingLevel={3}>
				<Input label="First name" name="firstname-heading-level" />
				<Input label="Surname" name="surname-heading-level" />
			</FormGroup>
			Heading level 4
			<FormGroup legend="Personal information" headingLevel={4}>
				<Input label="First name" name="firstname-heading-level" />
				<Input label="Surname" name="surname-heading-level" />
			</FormGroup>
			Heading level 5
			<FormGroup legend="Personal information" headingLevel={5}>
				<Input label="First name" name="firstname-heading-level" />
				<Input label="Surname" name="surname-heading-level" />
			</FormGroup>
			Heading level 6
			<FormGroup legend="Personal information" headingLevel={6}>
				<Input label="First name" name="firstname-heading-level" />
				<Input label="Surname" name="surname-heading-level" />
			</FormGroup>
			No Heading
			<FormGroup legend="Personal information">
				<Input label="First name" name="firstname-heading-level" />
				<Input label="Surname" name="surname-heading-level" />
			</FormGroup>
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
