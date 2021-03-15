declare module "@nice-digital/nds-breadcrumbs" {
	import React = require("react");

	export interface BreadcrumbProps {
		children: React.ReactNode;
		to?: string;
		elementType?: React.ElementType;
	}

	export const Breadcrumb: React.FC<BreadcrumbProps>;

	type ValidBreadcrumbProp =
		| React.ReactElement<BreadcrumbProps>
		| null
		| undefined;

	export interface BreadcrumbsProps {
		children: ValidBreadcrumbProp[] | ValidBreadcrumbProp;
	}

	export const Breadcrumbs: React.FC<BreadcrumbsProps>;
}
