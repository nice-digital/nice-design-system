import React from "react";
import { mount, shallow } from "enzyme";
import { PrevNext } from "../src/PrevNext";
import { Link } from "react-router-dom";
import toJson from "enzyme-to-json";
import { MemoryRouter } from "react-router-dom";

const nextPageLink = {
	text: "Page Header",
	destination: "/pageheader",
	elementType: Link,
	intro: "Show me the next one"
};

const previousPageLink = {
	text: "Alert",
	destination: "/alert"
};

describe("Previous & Next", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<PrevNext />);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot with both links supplied", () => {
		const wrapper = shallow(
			<PrevNext
				nextPageLink={nextPageLink}
				previousPageLink={previousPageLink}
			/>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should match snapshot with one link supplied", () => {
		const wrapper = shallow(<PrevNext previousPageLink={previousPageLink} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("link should render an href attribute if the elementType is an anchor", () => {
		const wrapper = mount(<PrevNext previousPageLink={previousPageLink} />);
		const anchor = wrapper.find("a");
		expect(anchor.props()["href"]).toEqual("/alert");
	});

	it("link should render an to attribute if the elementType is not an anchor and a method is not supplied", () => {
		const wrapper = mount(
			<MemoryRouter>
				<PrevNext
					previousPageLink={{
						text: "Alert",
						destination: "/alert",
						elementType: Link
					}}
				/>
			</MemoryRouter>
		);
		const anchor = wrapper.find(Link);
		expect(anchor.props()["to"]).toEqual("/alert");
	});

	it("should use a custom navigation method if supplied", () => {
		const wrapper = mount(
			<PrevNext
				previousPageLink={{
					text: "Alert",
					destination: "/alert",
					method: "pigeon"
				}}
			/>
		);
		const anchor = wrapper.find("a");
		expect(anchor.props()["pigeon"]).toEqual("/alert");
	});

	it("should pass extra props to the containing element", () => {
		const wrapper = shallow(
			<PrevNext nextPageLink={nextPageLink} data-tracker="my-tracker" />
		);
		expect(wrapper.props()["data-tracker"]).toEqual("my-tracker");
	});

	it("should merge additional classnames with the component classname", () => {
		const wrapper = shallow(
			<PrevNext nextPageLink={nextPageLink} className="extra-class" />
		);
		expect(wrapper.props()["className"]).toEqual("prev-next extra-class");
	});
});
