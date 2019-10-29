declare module "@nice-digital/nds-breadcrumbs" {
	import React = require("react");

	export interface BreadcrumbProps {
		children: string;
		to?: string;
		elementType?: React.ElementType;
	}

	export const Breadcrumb: React.FC<BreadcrumbProps>;

	export interface BreadcrumbsProps {
		children:
			| React.ReactElement<BreadcrumbProps>[]
			| React.ReactElement<BreadcrumbProps>;
	}

	export const Breadcrumbs: React.FC<BreadcrumbsProps>;
}
