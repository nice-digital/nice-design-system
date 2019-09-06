declare module "@nice-digital/nds-stacked-nav" {
	import React = require("react");

	interface Heading {
		label: React.ReactNode;
		labelTag?: React.ReactNode;
		link?: HeadingLink;
	}

	interface HeadingLink {
		destination: string;
		isCurrent?: boolean;
		linkTag?: React.ReactNode;
	}

	interface Link {
		destination?: string;
		isCurrent?: boolean;
		label: React.ReactNode;
		linkTag?: React.ReactNode;
	}

	export interface StackedNavProps {
		heading: Heading;
		links?: Array<Link>;
	}

	export const StackedNav: React.FC<StackedNavProps>;
}
