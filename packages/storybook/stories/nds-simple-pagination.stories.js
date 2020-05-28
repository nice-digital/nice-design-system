/* eslint react/prop-types: 0 */
import React from "react";
import { storiesOf } from "@storybook/react";
import { SimplePagination } from "@nice-digital/nds-simple-pagination";

const Default = <SimplePagination />;

const WithTotalPages = <SimplePagination currentPage={2} totalPages={4} />;

const NextAndPrevious = (
	<SimplePagination
		currentPage={2}
		totalPages={4}
		nextPageLink={{ destination: "#next" }}
		previousPageLink={{ destination: "#previous" }}
	/>
);

storiesOf("Simple Pagination", module)
	.add("Default", () => Default)
	.add("With total pages", () => WithTotalPages)
	.add("Next and previous", () => NextAndPrevious);
