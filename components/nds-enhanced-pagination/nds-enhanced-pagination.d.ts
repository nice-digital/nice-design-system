declare module "@nice-digital/nds-enhanced-pagination" {
	import * as React from "react";

	export interface EnhancedPaginationProps {
		[prop: string]: unknown;
		currentPage: number;
		pagesDestinations: PagesDestinationType[];
		previousPageDestination: string;
		nextPageDestination: string;
		elementType?: React.ElementType;
		method?: string;
		onClick?: React.MouseEventHandler;
	}

	export type PagesDestinationType = {
		destination: string;
	};

	export const EnhancedPagination: React.FC<EnhancedPaginationProps>;
}
