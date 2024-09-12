import { Accordion, AccordionGroup } from "@nice-digital/nds-accordion";

export const DefaultAccordion = () => (
	<Accordion title="Accordion title subtle variant (default)">
		Our monthly newsletter, keeping you up to date with{" "}
		<a href="#">important developments at NICE</a>
	</Accordion>
);

export const CalloutAccordion = () => (
	<Accordion title="Accordion title callout variant" variant="callout">
		Our monthly newsletter, keeping you up to date with{" "}
		<a href="#">important developments at NICE</a>
	</Accordion>
);

export const CautionAccordion = () => (
	<Accordion title="Caution accordion title" variant="caution">
		Our monthly newsletter, keeping you up to date with{" "}
		<a href="#">important developments at NICE</a>
	</Accordion>
);

export const AccordionWithHeading = () => (
	<Accordion
		title="Accordion with heading title"
		displayTitleAsHeading={true}
		headingLevel={2}
	>
		<p>Inner content of accordion</p>
	</Accordion>
);

export const AccordionGroupExample = () => (
	<AccordionGroup>
		<Accordion key="1" title="Accordion 1">
			Accordion 1 body
		</Accordion>
		<Accordion key="2" title="Accordion 2">
			Accordion 2 body
		</Accordion>
	</AccordionGroup>
);

export const AccordionGroupWithCautionExample = () => (
	<AccordionGroup>
		<Accordion key="1" title="Accordion 1" variant="caution">
			Caution Accordion 1 body
		</Accordion>
		<Accordion key="2" title="Accordion 2">
			Accordion 2 body
			<Accordion key="3" title="Nested Accordion 1">
				Nested Accordion 1 body
			</Accordion>
		</Accordion>
	</AccordionGroup>
);

export const AccordionGroupNestedAccordionExample = () => (
	<AccordionGroup>
		<Accordion key="1" title="Accordion 1">
			Accordion 1 body
		</Accordion>
		<Accordion key="2" title="Accordion 2">
			Accordion 2 body
		</Accordion>
	</AccordionGroup>
);
