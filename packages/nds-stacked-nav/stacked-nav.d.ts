declare module "@nice-digital/nds-stacked-nav" {
	import React = require("react");
	interface HeadingLink {
		destination: string;
		isCurrent?: boolean;
		elementType?: React.ElementType | string;
	}

	export interface StackedNavProps {
		label?: React.ReactNode;
		elementType?: React.ElementType;
		link?: HeadingLink;
		children?: Array<StackedNavLink>;
	}

	interface BaseStackedNavLinkProps {
		destination?: string;
		isCurrent?: boolean;
		hint?: string;
		elementType?: React.ElementType | string;
	}

	interface ChildStackedNavLinkProps extends BaseStackedNavLinkProps {
		children: React.ReactNode;
	}

	interface LabelStackedNavLinkProps extends BaseStackedNavLinkProps {
		label: React.ReactNode;
	}

	export type StackedNavLinkProps =
		| ChildStackedNavLinkProps
		| LabelStackedNavLinkProps;

	export const StackedNav: React.FC<StackedNavProps>;
	export const StackedNavLink: React.FC<StackedNavLinkProps>;
}
