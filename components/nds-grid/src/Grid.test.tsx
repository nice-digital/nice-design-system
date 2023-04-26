import React from "react";
import { render } from "@testing-library/react";

import {
	Grid,
	GridItem,
	gutterTypes,
	horizontalAlignmentTypes,
	verticalAlignmentTypes
} from "./Grid";

describe("Grid", () => {
	it("should match snapshot", () => {
		const wrapper = render(
			<Grid>
				<GridItem cols={6}>Test</GridItem>
				<GridItem cols={6}>Test</GridItem>
			</Grid>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should add rev class name to grid with reverse prop", () => {
		const { container } = render(
			<Grid reverse>
				<GridItem cols={6}>Test</GridItem>
			</Grid>
		);
		expect(container.querySelector(".grid")).toHaveClass("grid grid--rev");
	});

	describe("gutters", () => {
		const gutterTest = (
			gutter: keyof typeof gutterTypes,
			expectedClassName: string
		) => {
			const { container } = render(
				<Grid gutter={gutter}>
					<GridItem cols={6}>Test</GridItem>
				</Grid>
			);
			expect(container.querySelector(".grid")).toHaveClass(expectedClassName);
		};

		it("shouldn't add any class to grid with gutter prop as standard", () => {
			gutterTest(gutterTypes.standard, "grid");
		});

		it("should add gutterless class to grid with gutter prop as none", () => {
			gutterTest(gutterTypes.none, "grid grid--gutterless");
		});

		it("should add compact class to grid with gutter prop as compact", () => {
			gutterTest(gutterTypes.compact, "grid grid--compact");
		});

		it("should add compact class to grid with gutter prop as compact", () => {
			gutterTest(gutterTypes.loose, "grid grid--loose");
		});
	});

	describe("horizontal alignment", () => {
		const horizontalAlignmentTest = (
			hAlignment: keyof typeof horizontalAlignmentTypes,
			expectedClassName: string
		) => {
			const { container } = render(
				<Grid horizontalAlignment={hAlignment}>
					<GridItem cols={6}>Test</GridItem>
				</Grid>
			);
			expect(container.querySelector(".grid")).toHaveClass(expectedClassName);
		};

		it("shouldn't add any class to grid with horizontalAlignment prop as left", () => {
			horizontalAlignmentTest(horizontalAlignmentTypes.left, "grid");
		});

		it("should add center modifier class to grid when horizontalAlignment prop set to center", () => {
			horizontalAlignmentTest(
				horizontalAlignmentTypes.center,
				"grid grid--center"
			);
		});

		it("should add right modifier class to grid when horizontalAlignment prop set to right", () => {
			horizontalAlignmentTest(
				horizontalAlignmentTypes.right,
				"grid grid--right"
			);
		});
	});

	describe("vertical alignment", () => {
		const verticalAlignmentTest = (
			vAlignment: keyof typeof verticalAlignmentTypes,
			expectedClassName: string
		) => {
			const { container } = render(
				<Grid verticalAlignment={vAlignment}>
					<GridItem cols={6}>Test</GridItem>
				</Grid>
			);
			expect(container.querySelector(".grid")).toHaveClass(expectedClassName);
		};

		it("shouldn't add any class to grid with vertical alignment prop as top", () => {
			verticalAlignmentTest(verticalAlignmentTypes.top, "grid");
		});

		it("should add middle modifier class to grid when verticalAlignment prop set to middle", () => {
			verticalAlignmentTest(verticalAlignmentTypes.middle, "grid grid--middle");
		});

		it("should add bottom modifier class to grid when verticalAlignment prop set to bottom", () => {
			verticalAlignmentTest(verticalAlignmentTypes.bottom, "grid grid--bottom");
		});
	});

	it("should add a debug modifier class when debug prop set to true", () => {
		const { container } = render(
			<Grid debug>
				<GridItem cols={6}>Test</GridItem>
			</Grid>
		);
		expect(container.querySelector(".grid")).toHaveClass("grid grid--debug");
	});

	it("should add given additional class names to rendered grid class names", () => {
		const { container } = render(
			<Grid className="mt--d">
				<GridItem cols={6}>Test</GridItem>
			</Grid>
		);
		expect(container.querySelector(".grid")).toHaveClass("grid mt--d");
	});

	it("should use elementType prop as rendered DOM node type", () => {
		const wrapper = render(
			<Grid elementType="ul">
				<GridItem cols={6}>Test</GridItem>
			</Grid>
		);
		expect(wrapper.getByRole("list")).toBeInTheDocument();
	});
});
