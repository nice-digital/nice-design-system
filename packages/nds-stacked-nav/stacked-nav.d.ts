declare module "@nice-digital/nds-stacked-nav" {
	import React = require("react");

	export interface StackedNavLinkProps {
		destination?: string;
		isCurrent?: boolean;
		label?: React.ReactNode;
		linkTag?: React.ReactNode;
		hint?: string;
		children?: string;
	}

	export interface StackedNavProps {
		label?: React.ReactNode;
		labelTag?: React.ReactNode;
		link?: HeadingLink;
	}

	interface HeadingLink {
		destination: string;
		isCurrent?: boolean;
		linkTag?: React.ReactNode;
	}

	export const StackedNav: React.FC<StackedNavProps>;
	export const StackedNavLink: React.FC<StackedNavLinkProps>;
}
