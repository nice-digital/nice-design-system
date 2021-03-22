import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { Container, Grid, GridItem } from "../src/Grid";

const Content = () => (
	<Grid>
		<GridItem>
			<p>Test</p>
		</GridItem>
	</Grid>
);

describe("Container", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(
			<Container>
				<Content />
			</Container>
		);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot", () => {
		const wrapper = mount(
			<Container>
				<Content />
			</Container>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should add additional classNames", () => {
		const wrapper = shallow(
			<Container className="testclass">
				<Content />
			</Container>
		);
		expect(wrapper.find(".container").props().className).toEqual(
			"container testclass"
		);
	});

	it("should add full width class if bool supplied", () => {
		const wrapper = shallow(
			<Container fullWidth>
				<Content />
			</Container>
		);
		expect(wrapper.find(".container").props().className).toEqual(
			"container container--full"
		);
	});

	it("should use elementType prop as rendered DOM node type", () => {
		const wrapper = shallow(
			<Container elementType="main">
				<Content />
			</Container>
		);
		expect(wrapper.find(".container").type()).toEqual("main");
	});

	it("should spread other props against the container", () => {
		const wrapper = shallow(
			<Container data-track="trackme">
				<Content />
			</Container>
		);
		expect(wrapper.find(".container").props()["data-track"]).toEqual("trackme");
	});
});
