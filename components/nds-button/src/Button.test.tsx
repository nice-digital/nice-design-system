import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("@nice-digital/nds-button", () => {
	it("should render a button tag", () => {
		const wrapper = render(<Button>Example</Button>);
		expect(wrapper.getByRole("button")).toBeInTheDocument();
	});

	it("should match snapshot", () => {
		const wrapper = render(<Button>Example</Button>);
		expect(wrapper).toMatchSnapshot();
	});

	describe("contents", () => {
		it("should render children prop into button contents", () => {
			const wrapper = render(<Button>Test contents</Button>);
			expect(
				wrapper.getByRole("button", { name: "Test contents" })
			).toBeInTheDocument();
		});

		it("should render multiple children as content", () => {
			const wrapper = render(
				<Button>
					<span>1</span>
					<span>2</span>
				</Button>
			);
			expect(wrapper.getByRole("button").querySelectorAll("span").length).toBe(
				2
			);
		});
	});

	describe("button types", () => {
		it("should pass buttonType prop into type attribute on rendered button", () => {
			const wrapper = render(
				<Button buttonType="submit">Test contents</Button>
			);
			expect(wrapper.getByRole("button").getAttribute("type")).toBe("submit");
		});
	});

	describe("variants", () => {
		it("should just use btn class for primary variant", () => {
			const wrapper = render(<Button variant="primary">Primary</Button>);
			expect(wrapper.getByRole("button")).toHaveClass("btn");
		});

		it("should append cta modifier class for cta variant", () => {
			const wrapper = render(<Button variant="cta">CTA</Button>);
			expect(wrapper.getByRole("button")).toHaveClass("btn btn--cta");
		});

		it("should append secondary modifier class for secondary variant", () => {
			const wrapper = render(<Button variant="secondary">Secondary</Button>);
			expect(wrapper.getByRole("button")).toHaveClass("btn btn--secondary");
		});

		it("should append inverse modifier class for inverse variant", () => {
			const wrapper = render(<Button variant="inverse">Inverse</Button>);
			expect(wrapper.getByRole("button")).toHaveClass("btn btn--inverse");
		});
	});

	describe("anchors", () => {
		it("should render an anchor when to prop is passed", () => {
			const wrapper = render(<Button to="/test">Test</Button>);
			expect(wrapper.getByRole("link")).toBeInTheDocument();
		});

		it("should render an href attribute with value from to prop", () => {
			const wrapper = render(
				<Button type="anchor" to="/test">
					Test
				</Button>
			);
			expect(wrapper.getByRole("link").getAttribute("href")).toBe("/test");
		});
	});

	describe("props", () => {
		it("should pass props as attributes on rendered element", () => {
			const wrapper = render(
				<Button type="submit" disabled={true} variant="cta">
					txt
				</Button>
			);

			const button = wrapper.getByRole("button", {
				name: "txt"
			}) as HTMLButtonElement;
			expect(button).toHaveClass("btn btn--cta");
			expect(button.getAttribute("type")).toBe("submit");
			expect(button.disabled).toBe(true);
		});

		it("should append given className prop to rendered className attribute", () => {
			const wrapper = render(
				<Button className="mt--0" to="/test">
					txt
				</Button>
			);

			expect(
				wrapper.getByRole("link", { name: "txt" }).getAttribute("href")
			).toBe("/test");
			expect(wrapper.getByRole("link", { name: "txt" })).toHaveClass(
				"btn mt--0"
			);
		});

		it("should call onClick handler", async () => {
			const clickHandler = jest.fn();
			const wrapper = render(<Button onClick={clickHandler}>Test</Button>);
			const button = wrapper.getByRole("button");
			userEvent.click(button);

			await waitFor(() => {
				expect(clickHandler).toHaveBeenCalled();
			});
		});
	});

	describe("should render the appropriate link method for the supplied elementType and method", () => {
		it("should use any supplied method", () => {
			const { container } = render(
				<>
					<Button method="pigeon" to="/one" className="one">
						One
					</Button>
				</>
			);

			expect(container.querySelector(".one")?.getAttribute("pigeon")).toBe(
				"/one"
			);
		});

		it("should use href if elementType is anchor", () => {
			const wrapper = render(
				<Button elementType="a" to="/two" className="two">
					Two
				</Button>
			);

			expect(
				wrapper.getByRole("link", { name: "Two" }).getAttribute("href")
			).toBe("/two");
		});
	});
});
