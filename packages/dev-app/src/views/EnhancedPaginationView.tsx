import React from "react";
import { EnhancedPagination } from "@nice-digital/nds-enhanced-pagination";
import { Link } from "react-router-dom";

const totalPages = 32;

const mapPageNumberToHref = (pageNumber: number) => `#${pageNumber}`;

export const EnhancedPaginationView = () => {
	return (
		<>
			<p>Default element type:</p>
			<EnhancedPagination
				currentPage={1}
				mapPageNumberToHref={mapPageNumberToHref}
				totalPages={totalPages}
			/>
			<p>Middle page number:</p>
			<EnhancedPagination
				currentPage={16}
				mapPageNumberToHref={mapPageNumberToHref}
				totalPages={totalPages}
			/>
			<p>End of range:</p>
			<EnhancedPagination
				currentPage={32}
				mapPageNumberToHref={mapPageNumberToHref}
				totalPages={totalPages}
			/>
			<p>Custom element type:</p>
			<EnhancedPagination
				currentPage={1}
				elementType={Link}
				method="to"
				mapPageNumberToHref={mapPageNumberToHref}
				totalPages={totalPages}
			/>
		</>
	);
};
