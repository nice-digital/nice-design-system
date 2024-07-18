import { Accordion } from "@nice-digital/nds-accordion";

export const DefaultAccordion = () => (
	<Accordion title="Accordion title">
		Our monthly newsletter, keeping you up to date with{" "}
		<a href="#">important developments at NICE</a>
	</Accordion>
);

export const CautionAccordion = () => (
	<Accordion title="Caution accordion title" isCaution={true}>
		Our monthly newsletter, keeping you up to date with{" "}
		<a href="#">important developments at NICE</a>
	</Accordion>
);
