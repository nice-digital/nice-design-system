import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { Grid, GridItem } from "../src/Grid";

describe("Grid", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(
			<Grid>
				<GridItem cols={6}>Test</GridItem>
				<GridItem cols={6}>Test</GridItem>
			</Grid>
		);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot", () => {
		const wrapper = mount(
			<Grid>
				<GridItem cols={6}>Test</GridItem>
				<GridItem cols={6}>Test</GridItem>
			</Grid>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should add rev class name to grid with reverse prop", () => {
		const wrapper = shallow(
			<Grid reverse>
				<GridItem cols={6}>Test</GridItem>
			</Grid>
		);
		expect(wrapper.find(".grid").props().className).toEqual("grid grid--rev");
	});

	describe("gutters", () => {
		const gutterTest = (gutter, expectedClassName) => {
			const wrapper = shallow(
				<Grid gutter={gutter}>
					<GridItem cols={6}>Test</GridItem>
				</Grid>
			);
			expect(wrapper.find(".grid").props().className).toEqual(
				expectedClassName
			);
		};

		it("shouldn't add any class to grid with gutter prop as standard", () => {
			gutterTest(Grid.gutter.standard, "grid");
		});

		it("should add gutterless class to grid with gutter prop as none", () => {
			gutterTest(Grid.gutter.none, "grid grid--gutterless");
		});

		it("should add compact class to grid with gutter prop as compact", () => {
			gutterTest(Grid.gutter.compact, "grid grid--compact");
		});

		it("should add compact class to grid with gutter prop as compact", () => {
			gutterTest(Grid.gutter.loose, "grid grid--loose");
		});
	});

	describe("horizontal alignment", () => {
		const horizontalAlignmentTest = (hAlignment, expectedClassName) => {
			const wrapper = shallow(
				<Grid horizontalAlignment={hAlignment}>
					<GridItem cols={6}>Test</GridItem>
				</Grid>
			);
			expect(wrapper.find(".grid").props().className).toEqual(
				expectedClassName
			);
		};

		it("shouldn't add any class to grid with horizontalAlignment prop as left", () => {
			horizontalAlignmentTest(Grid.horizontalAlignment.left, "grid");
		});

		it("should add center modifier class to grid when horizontalAlignment prop set to center", () => {
			horizontalAlignmentTest(
				Grid.horizontalAlignment.center,
				"grid grid--center"
			);
		});

		it("should add right modifier class to grid when horizontalAlignment prop set to right", () => {
			horizontalAlignmentTest(
				Grid.horizontalAlignment.right,
				"grid grid--right"
			);
		});
	});

	describe("vertical alignment", () => {
		const verticalAlignmentTest = (vAlignment, expectedClassName) => {
			const wrapper = shallow(
				<Grid verticalAlignment={vAlignment}>
					<GridItem cols={6}>Test</GridItem>
				</Grid>
			);
			expect(wrapper.find(".grid").props().className).toEqual(
				expectedClassName
			);
		};

		it("shouldn't add any class to grid with vertical alignment prop as top", () => {
			verticalAlignmentTest(Grid.verticalAlignment.top, "grid");
		});

		it("should add middle modifier class to grid when verticalAlignment prop set to middle", () => {
			verticalAlignmentTest(Grid.verticalAlignment.middle, "grid grid--middle");
		});

		it("should add bottom modifier class to grid when verticalAlignment prop set to bottom", () => {
			verticalAlignmentTest(Grid.verticalAlignment.bottom, "grid grid--bottom");
		});
	});

	it("should add a debug modifier class when debug prop set to true", () => {
		const wrapper = shallow(
			<Grid debug>
				<GridItem cols={6}>Test</GridItem>
			</Grid>
		);
		expect(wrapper.find(".grid").props().className).toEqual("grid grid--debug");
	});

	it("should add given additional class names to rendered grid class names", () => {
		const wrapper = shallow(
			<Grid className="mt--d">
				<GridItem cols={6}>Test</GridItem>
			</Grid>
		);
		expect(wrapper.find(".grid").props().className).toEqual("grid mt--d");
	});
});
