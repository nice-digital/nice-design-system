declare module "@nice-digital/nds-enhanced-pagination" {
	import * as React from "react";

	export interface EnhancedPaginationProps {
		[prop: string]: unknown;
		currentPage: number;
		totalPages: number;
		mapPageNumberToHref: (pageNumber: number) => string;
		elementType?: React.ElementType;
		method?: string;
		className?: string;
	}

	export const EnhancedPagination: React.FC<EnhancedPaginationProps>;
}
