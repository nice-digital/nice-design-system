declare module "@nice-digital/nds-simple-pagination" {
	import * as React from "react";

	interface PageLinkProps {
		destination?: string;
		elementType?: React.ElementType;
		method?: string;
	}

	export interface SimplePaginationProps {
		[prop: string]: unknown;
		currentPage: number;
		totalPages?: number;
		nextPageLink?: PageLinkProps;
		previousPageLink?: PageLinkProps;
	}

	export const SimplePagination: React.FC<SimplePaginationProps>;
}
