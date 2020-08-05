declare module "@nice-digital/nds-stacked-nav" {
	import React = require("react");

	interface HeadingLink {
		destination: string;
		isCurrent?: boolean;
		elementType?: React.ElementType | string;
	}

	export interface StackedNavNestProps {
		children: React.ReactNode;
	}

	export interface StackedNavProps {
		label?: React.ReactNode;
		elementType?: React.ElementType;
		link?: HeadingLink;
		children:
			| React.ReactElement<React.FC<StackedNavLinkType>>
			| React.ReactElement<React.FC<StackedNavLinkType>>[];
		className?: string;
		[key: string]: unknown;
	}

	interface BaseStackedNavLinkProps {
		destination?: string;
		isCurrent?: boolean;
		hint?: React.ReactNode;
		elementType?: React.ElementType | string;
		[key: string]: unknown;
		nested?:
			| React.ReactElement<React.FC<StackedNavLinkType>>[]
			| React.ReactElement<React.FC<StackedNavLinkType>>
			| false;
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
