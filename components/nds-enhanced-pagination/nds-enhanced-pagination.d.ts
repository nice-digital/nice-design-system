declare module "@nice-digital/nds-enhanced-pagination" {
	import * as React from "react";

	export interface EnhancedPaginationProps {
		[prop: string]: unknown;
		totalPages: number;
		currentPage: number;
	}

	export const EnhancedPagination: React.FC<EnhancedPaginationProps>;
}
