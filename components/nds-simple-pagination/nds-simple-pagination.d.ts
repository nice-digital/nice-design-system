declare module "@nice-digital/nds-simple-pagination" {
	import * as React from "react";

	interface PageLinkProps {
		destination?: string;
		elementType?: React.ElementType;
	}

	export interface SimplePaginationProps {
		currentPage: number;
		totalPages?: number;
		nextPageLink?: PageLinkProps;
		previousPageLink?: PageLinkProps;
		[prop: string]: any;
	}

	export const SimplePagination: React.FC<SimplePaginationProps>;
}
