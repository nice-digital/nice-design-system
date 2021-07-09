declare module "@nice-digital/nds-horizontal-nav" {
	import React = require("react");

	export interface HorizontalNavProps {
		children: React.ReactNode;
	}

	export interface HorizontalNavLinkProps {
		children?: React.ReactNode;
		className?: string;
		destination: string;
		elementType?: React.ReactHTMLElement<any> | React.ReactNode;
		isCurrent?: boolean;
		method?: string;
		title?: string;
	}

	export const HorizontalNav: React.FC<HorizontalNavProps>;
	export const HorizontalNavLink: React.FC<HorizontalNavLinkProps>;
}
