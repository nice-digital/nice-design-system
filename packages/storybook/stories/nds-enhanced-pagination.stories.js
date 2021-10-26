import React from "react";

import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";

import { EnhancedPagination } from "@nice-digital/nds-enhanced-pagination";

const mapPageNumberToHref = (pageNumber: number) => `#${pageNumber}`;

storiesOf("Components/Enhanced pagination", module)
	.add("First page, up to 6 pages", () => {
		return (
			<EnhancedPagination
				currentPage={1}
				mapPageNumberToHref={mapPageNumberToHref}
				totalPages={6}
			/>
		);
	})
	.add("Second page, up to 6 pages", () => {
		return (
			<EnhancedPagination
				currentPage={2}
				mapPageNumberToHref={mapPageNumberToHref}
				totalPages={6}
			/>
		);
	})
	.add("Last page, up to 6 pages", () => {
		return (
			<EnhancedPagination
				currentPage={6}
				mapPageNumberToHref={mapPageNumberToHref}
				totalPages={6}
			/>
		);
	})
	.add("First page, more than 6 pages", () => {
		return (
			<EnhancedPagination
				currentPage={1}
				mapPageNumberToHref={mapPageNumberToHref}
				totalPages={10}
			/>
		);
	})
	.add("Middle page, more than 6 pages", () => {
		return (
			<EnhancedPagination
				currentPage={10}
				mapPageNumberToHref={mapPageNumberToHref}
				totalPages={20}
			/>
		);
	})
	.add("Last page, more than 6 pages", () => {
		return (
			<EnhancedPagination
				currentPage={10}
				mapPageNumberToHref={mapPageNumberToHref}
				totalPages={10}
			/>
		);
	})
	.add("Try it out!", () => {
		return (
			<EnhancedPagination
				currentPage={number("Current page", 5)}
				mapPageNumberToHref={mapPageNumberToHref}
				totalPages={number("Total pages", 10)}
			/>
		);
	});
