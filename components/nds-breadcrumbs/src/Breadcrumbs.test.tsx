import { render } from "@testing-library/react";

import { Breadcrumb } from "./Breadcrumb";
import { Breadcrumbs } from "./Breadcrumbs";

describe("Breadcrumbs", () => {
	it("should match snapshot for single level", () => {
		const wrapper = render(
			<Breadcrumbs>
				<Breadcrumb to="/">Home</Breadcrumb>
				<Breadcrumb>Page</Breadcrumb>
			</Breadcrumbs>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match snapshot for multiple levels", () => {
		const wrapper = render(
			<Breadcrumbs>
				<Breadcrumb to="/">Home</Breadcrumb>
				<Breadcrumb to="/topics/">Topics</Breadcrumb>
				<Breadcrumb>Page</Breadcrumb>
			</Breadcrumbs>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should spread additional props onto the container", () => {
		const wrapper = render(
			<Breadcrumbs data-track={false}>
				<Breadcrumb to="/">Home</Breadcrumb>
				<Breadcrumb>Page</Breadcrumb>
			</Breadcrumbs>
		);
		expect(wrapper.getByRole("navigation").getAttribute("data-track")).toBe(
			"false"
		);
	});
});
