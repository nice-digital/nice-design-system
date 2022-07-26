declare module "@nice-digital/nds-page-header" {
	import React = require("react");

	export interface PageHeaderProps {
		[prop: string]: unknown;
		useAltHeading?: boolean;
		preheading?: React.ReactNode;
		heading: React.ReactNode;
		lead?: React.ReactNode;
		metadata?: React.ReactNode[];
		cta?: React.ReactNode;
	}

	export const PageHeader: React.FC<PageHeaderProps>;
}
