"use strict";

import React from "react";
import { shallow } from "enzyme";

import { FilterSummary } from "../src/Filters.js";
// import { FilterSummary } from "../src/FilterSummary.js";

const onChanged = e => {};

const filterSummaryProps = {
	sorting: [{ title: "Relevance", onClick: onChanged }],
	activeFilters: [
		{
			title: "Another filter",
			onClick: onChanged
		}
	],
	className: "testClass"
};

describe("@nice-digital/nds-filters", () => {
	it("should render filter summary without crashing", () => {
		shallow(<FilterSummary {...filterSummaryProps} />);
	});

	// Test the filter summary props?

	// Add other bits to snapshot
	it("should match snapshot", () => {
		const wrapper = shallow(<FilterSummary {...filterSummaryProps} />);
		expect(wrapper).toMatchSnapshot();
	});

	// Test components individually with their props? Then together?
});
