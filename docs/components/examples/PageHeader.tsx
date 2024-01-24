import { PageHeader } from "@nice-digital/nds-page-header";
import { Button } from "@nice-digital/nds-button";

export const DefaultHeader = () => <PageHeader heading="Welcome to the page" />;

export const PreHeader = () => (
	<PageHeader heading="Welcome to the page" preheading="Here's a pre-heading" />
);

export const LeadHeader = () => (
	<PageHeader heading="Welcome to the page" lead="This is the lead" />
);

export const MetadataHeader = () => (
	<PageHeader heading="Welcome to the page" metadata={["Item 1", "Item 2"]} />
);

export const CTAHeader = () => (
	<PageHeader
		heading="Welcome to the page"
		cta={<Button>Do something</Button>}
	/>
);

export const FullWidthHeader = () => (
	<PageHeader heading="I am a full width header!" isFullWidth={true} />
);
