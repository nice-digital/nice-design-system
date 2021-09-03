declare module "@nice-digital/nds-enhanced-pagination" {
	import * as React from "react";

	export interface EnhancedPaginationProps {
		[prop: string]: unknown;
		currentPage: number;
	}

	export const EnhancedPagination: React.FC<EnhancedPaginationProps>;
}
