declare module "@nice-digital/nds-simple-pagination" {
	import * as React from "react";

	interface PageLinkProps {
		[prop: string]: unknown;
		destination?: string;
		elementType?: React.ElementType;
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
