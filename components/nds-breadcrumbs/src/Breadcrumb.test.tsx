import { render } from "@testing-library/react";
import { Breadcrumb } from "./Breadcrumb";

describe("Breadcrumb", () => {
	it("should match snapshot for no location", () => {
		const wrapper = render(<Breadcrumb>Home</Breadcrumb>);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match snapshot for anchor", () => {
		const wrapper = render(<Breadcrumb to="/">Home</Breadcrumb>);
		expect(wrapper).toMatchSnapshot();
	});

	it("should pass on props to rendered anchor", () => {
		const wrapper = render(
			<Breadcrumb to="/" aria-current={true}>
				Home
			</Breadcrumb>
		);

		const link = wrapper.getByRole("link");
		expect(link.getAttribute("href")).toBe("/");
		expect(link.getAttribute("aria-current")).toBe("true");
		expect(link.textContent).toBe("Home");
	});

	it("should merge any additional classes onto the container", () => {
		const wrapper = render(
			<Breadcrumb to="/" aria-current={true} className="mt--0">
				Home
			</Breadcrumb>
		);

		expect(wrapper.getByRole("listitem")).toHaveClass("mt--0");
	});
});
