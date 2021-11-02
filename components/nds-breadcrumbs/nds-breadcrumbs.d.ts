declare module "@nice-digital/nds-breadcrumbs" {
	import React = require("react");

	export interface BreadcrumbProps {
		[prop: string]: unknown;
		children: React.ReactNode;
		to?: string;
		elementType?: React.ElementType;
		method?: string;
	}

	export const Breadcrumb: React.FC<BreadcrumbProps>;

	type ValidBreadcrumbProp =
		| React.ReactElement<BreadcrumbProps>
		| null
		| undefined;

	export interface BreadcrumbsProps {
		[prop: string]: unknown;
		className?: string;
		children: ValidBreadcrumbProp[] | ValidBreadcrumbProp;
	}

	export const Breadcrumbs: React.FC<BreadcrumbsProps>;
}
