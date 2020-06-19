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
		hint?: React.ElementType;
		elementType?: React.ElementType | string;
	}

	interface ChildStackedNavLinkProps extends BaseStackedNavLinkProps {
		children: React.ReactNode;
		label?: never;
	}

	interface LabelStackedNavLinkProps extends BaseStackedNavLinkProps {
		label: React.ReactNode;
		children?: never;
	}

	type StackedNavLinkType = React.FC<
		ChildStackedNavLinkProps | LabelStackedNavLinkProps
	>;

	type StackedNavPropType = React.FC<StackedNavProps>;

	export const StackedNav: StackedNavPropType;
	export const StackedNavLink: StackedNavLinkType;
}
