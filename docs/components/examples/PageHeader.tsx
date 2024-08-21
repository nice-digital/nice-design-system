import { PageHeader } from "@nice-digital/nds-page-header";
import { Button } from "@nice-digital/nds-button";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";

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

export const HeaderWithDescription = () => (
	<PageHeader
		heading="Header with description"
		description="I am a description"
	/>
);

export const HeaderWithBreadcrumbs = () => (
	<PageHeader
		heading="Header with breadcrumbs"
		breadcrumbs={
			<Breadcrumbs>
				<Breadcrumb to="https://www.nice.org.uk/">Home</Breadcrumb>
				<Breadcrumb to="https://www.nice.org.uk/guidance">
					NICE guidance
				</Breadcrumb>
				<Breadcrumb>Published</Breadcrumb>
			</Breadcrumbs>
		}
	/>
);

export const FullWidthLightHeader = () => (
	<PageHeader
		heading="I am a full width light header!"
		variant="fullWidthLight"
	/>
);

export const FullWidthDarkHeader = () => (
	<PageHeader
		heading="I am a full width dark header!"
		variant="fullWidthDark"
	/>
);

export const WithVerticalPadding = () => (
	<PageHeader heading="I have vertical padding" verticalPadding="loose" />
);

export const HeaderWithSecondSection = () => (
	<PageHeader
		heading="There's a second section here!"
		variant="fullWidthLight"
		secondSection={
			<aside>
				<h3>I am a second section</h3>
				<ol>
					<li>One</li>
					<li>Two</li>
					<li>Three</li>
				</ol>
			</aside>
		}
	/>
);
