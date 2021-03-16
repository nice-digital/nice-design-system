declare module "@nice-digital/nds-page-header" {
	import React = require("react");

	export interface PageHeaderProps {
		preheading?: React.ReactNode;
		heading: React.ReactNode;
		lead?: React.ReactNode;
		metadata?: React.ReactNode[];
		cta?: React.ReactNode;
	}

	export const PageHeader: React.FC<PageHeaderProps>;
}
