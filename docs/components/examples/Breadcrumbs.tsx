import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";

export const DefaultBreadcrumbs = () => (
	<Breadcrumbs>
		<Breadcrumb to="https://www.nice.org.uk/">Home</Breadcrumb>
		<Breadcrumb to="https://www.nice.org.uk/guidance">NICE guidance</Breadcrumb>
		<Breadcrumb>Published</Breadcrumb>
	</Breadcrumbs>
);
