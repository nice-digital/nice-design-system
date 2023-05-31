import { PrevNext } from "@nice-digital/nds-prev-next";
import { SimplePagination } from "@nice-digital/nds-simple-pagination";
import { EnhancedPagination } from "@nice-digital/nds-enhanced-pagination";

export const DefaultPrevNext = () => (
	<PrevNext
		previousPageLink={{ text: "Overview", destination: "#" }}
		nextPageLink={{
			text: "The condition, current treatments and procedure",
			destination: "#"
		}}
	/>
);

export const DefaultSimple = () => (
	<SimplePagination
		totalPages={7}
		currentPage={2}
		nextPageLink={{ destination: "#", elementType: "a" }}
		previousPageLink={{ destination: "#", elementType: "a" }}
	/>
);

export const DefaultEnhanced = () => (
	<EnhancedPagination
		currentPage={2}
		mapPageNumberToHref={() => "#"}
		totalPages={7}
	/>
);
