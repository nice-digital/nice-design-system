import React from "react";
import { EnhancedPagination } from "@nice-digital/nds-enhanced-pagination";

export const EnhancedPaginationView = () => {
	return (
		<>
			<EnhancedPagination totalPages={8} currentPage={8} />
		</>
	);
};

// Props we probably need - currentPage (both for styling and working out which ones to render), elementType, className, onClick,
