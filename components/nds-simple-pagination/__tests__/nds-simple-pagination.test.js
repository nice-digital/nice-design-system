import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { SimplePagination } from "../src/SimplePagination";
import { Link, MemoryRouter } from "react-router-dom";

const props = {
	totalPages: 3,
	currentPage: 1,
	nextPageLink: {
		destination: "/next",
		elementType: Link
	},
	previousPageLink: {
		destination: "#previous"
	}
};

describe("Simple Pagination", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<SimplePagination />);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot with some default attributes", () => {
		const wrapper = shallow(<SimplePagination {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should default to an anchor if no elementType is provided", () => {
		const wrapper = mount(
			<MemoryRouter>
				<SimplePagination {...props} />
			</MemoryRouter>
		);
		const previousLink = wrapper.find("a[href='#previous']");
		expect(previousLink.length).toEqual(1);
	});

	it("should use a custom navigation attribute if supplied", () => {
		const localProps = Object.assign({}, props, {
			previousPageLink: {
				destination: "#previous",
				method: "pigeon"
			}
		});
		const wrapper = mount(
			<MemoryRouter>
				<SimplePagination {...localProps} />
			</MemoryRouter>
		);
		const previousLink = wrapper.find("a[pigeon='#previous']");
		expect(previousLink.length).toEqual(1);
	});

	it("should fallback to `to` if not an anchor and method not supplied", () => {
		const CustomLinkElementType = () => null;
		const localProps = Object.assign({}, props, {
			previousPageLink: {
				destination: "#previous",
				elementType: CustomLinkElementType
			}
		});
		const wrapper = mount(
			<MemoryRouter>
				<SimplePagination {...localProps} />
			</MemoryRouter>
		);
		const previousLink = wrapper.find(CustomLinkElementType);
		expect(previousLink.props()["to"]).toEqual("#previous");
	});

	it("should pass extra props to the container element", () => {
		const localProps = Object.assign({}, props, {
			"data-tracker": "my-tracker"
		});
		const wrapper = shallow(<SimplePagination {...localProps} />);
		expect(wrapper.props()["data-tracker"]).toEqual("my-tracker");
	});

	it("should default to 'page 1' only if no props are provided", () => {
		const wrapper = shallow(<SimplePagination />);
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should merge any additional classes on to the existing wrapper class", () => {
		const wrapper = shallow(<SimplePagination className="testing hello" />);
		expect(wrapper.props()["className"]).toEqual(
			"simple-pagination testing hello"
		);
	});
});
