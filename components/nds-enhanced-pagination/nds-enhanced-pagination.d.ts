declare module "@nice-digital/nds-enhanced-pagination" {
	import * as React from "react";

	export interface EnhancedPaginationProps {
		[prop: string]: unknown;
		currentPage: number;
		totalPages: number;
		pagesActions: ActionType[];
		previousPageAction: ActionType;
		nextPageAction: ActionType;
		elementType?: React.ElementType;
		method?: string;
		className?: string;
	}

	export type ActionType = {
		destination?: string;
		onClick?: React.EventHandler;
		pageNumber?: number;
	};

	export const EnhancedPagination: React.FC<EnhancedPaginationProps>;
}
