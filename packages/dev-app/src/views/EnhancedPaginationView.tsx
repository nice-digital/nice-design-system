import React from "react";
import { EnhancedPagination } from "@nice-digital/nds-enhanced-pagination";

const pagesDestinations = [
	{ destination: "#1" },
	{ destination: "#2" },
	{ destination: "#3" },
	{ destination: "#4" },
	{ destination: "#5" },
	{ destination: "#6" },
	{ destination: "#7" },
	{ destination: "#8" },
	{ destination: "#9" }
];

// I'm presuming that the element type for the pages links and for the next and previous will be the same, reasonable? Yes.
const elementType = "anElementType";
const method = "aMethod";

const nextPageDestination = "#somewhere";

const previousPageDestination = "#somewhereelse";

export const EnhancedPaginationView = () => {
	return (
		<>
			<EnhancedPagination
				currentPage={5}
				elementType={elementType}
				method={method}
				nextPageDestination={nextPageDestination}
				previousPageDestination={previousPageDestination}
				pagesDestinations={pagesDestinations}
			/>
		</>
	);
};
