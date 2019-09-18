declare module "@nice-digital/nds-stacked-nav" {
	import React = require("react");

	export interface StackedNavLinkProps {
		destination?: string;
		isCurrent?: boolean;
		label?: React.ReactNode;
		elementType?: React.ElementType | string;
		hint?: string;
		children?: string;
	}

	export interface StackedNavProps {
		label?: React.ReactNode;
		elementType?: React.ElementType;
		link?: HeadingLink;
	}

	interface HeadingLink {
		destination: string;
		isCurrent?: boolean;
		elementType?: React.ElementType | string;
	}

	export const StackedNav: React.FC<StackedNavProps>;
	export const StackedNavLink: React.FC<StackedNavLinkProps>;
}
