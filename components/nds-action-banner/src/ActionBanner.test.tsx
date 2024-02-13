import { act, render, screen, waitFor } from "@testing-library/react";
import { ActionBanner, ActionBannerProps } from "./ActionBanner";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("ActionBanner", () => {
	it("should render child text", () => {
		const sampleText = "Some sample text";
		render(<ActionBanner title="Title">{sampleText}</ActionBanner>);
		expect(screen.getByText(sampleText)).toBeInTheDocument();
	});

	it("should match snapshot for default action banner", () => {
		const { container } = render(
			<ActionBanner title="Some title" cta={<a href="/test">Some CTA</a>}>
				Some body
			</ActionBanner>
		);
		expect(container).toMatchSnapshot();
	});

	it("should match snapshot for closeable subtle action banner", () => {
		const { container } = render(
			<ActionBanner
				variant="subtle"
				title="Some title"
				cta={<a href="/test">Some CTA</a>}
				onClosing={jest.fn()}
			>
				Some body
			</ActionBanner>
		);
		expect(container).toMatchSnapshot();
	});

	it("should spread additional props onto the container", () => {
		const { container } = render(
			<ActionBanner
				title="Some title"
				cta={<a href="/test">Some CTA</a>}
				data-track="test"
			>
				Some body
			</ActionBanner>
		);
		expect(container.querySelector("section")).toHaveAttribute(
			"data-track",
			"test"
		);
	});

	it("should merge additional classes into the existing classes", () => {
		const { container } = render(
			<ActionBanner title="Some title" className="mt--0">
				Some body
			</ActionBanner>
		);
		expect(container.querySelector("section")).toHaveClass("mt--0");
	});

	it("should not render an empty CTA", () => {
		const { container } = render(
			<ActionBanner title="Title">Body</ActionBanner>
		);
		expect(container.querySelector(".action-banner__actions")).toBe(null);
	});

	describe("css class names", () => {
		const variants = [
			["default", "action-banner--default"],
			["subtle", "action-banner--subtle"],
			["fullWidth", "action-banner--full-width"],
			["fullWidthSubtle", "action-banner--full-width-subtle"]
		];

		it.each(variants)(
			"Should have correct css class for variant %s",
			(variant, expectedClass) => {
				const { container } = render(
					<ActionBanner
						variant={variant as ActionBannerProps["variant"] | undefined}
						title="Some title"
						cta={<a href="/test">Some CTA</a>}
					>
						Some body
					</ActionBanner>
				);

				expect(container.firstChild).toHaveClass(expectedClass);
			}
		);

		it("should have default 'action-banner' class when variant is undefined", () => {
			const { container } = render(
				<ActionBanner title="Some title" cta={<a href="/test">Some CTA</a>}>
					Some body
				</ActionBanner>
			);

			const expectedClassName = "action-banner";

			expect(container.firstChild).toHaveClass(expectedClassName);
		});
	});

	describe("tracking", () => {
		const variants = [
			["default", "action-banner--default"],
			["subtle", "action-banner--subtle"],
			["fullWidth", "action-banner--fullWidth"],
			["fullWidthSubtle", "action-banner--fullWidthSubtle"],
			[undefined, "action-banner"]
		];

		it.each(variants)(
			"Should have correct data-component attribute for variant %s",
			(variant, expectedValue) => {
				const { container } = render(
					<ActionBanner
						variant={variant as ActionBannerProps["variant"] | undefined}
						title="Some title"
						cta={<a href="/test">Some CTA</a>}
					>
						Some body
					</ActionBanner>
				);

				const element = container.querySelector("[data-component]");

				expect(element).toBeInTheDocument();
				expect(element?.getAttribute("data-component")).toBe(expectedValue);
			}
		);
	});

	it("should render all props", () => {
		const { container } = render(
			<ActionBanner
				title="Test Title"
				variant="fullWidth"
				cta={<a href="/test">Some CTA</a>}
				onClosing={jest.fn()}
				className="test-class"
				image="test-image.jpg"
			>
				<p>Test Children</p>
			</ActionBanner>
		);

		expect(container).toMatchSnapshot();
	});

	describe("image", () => {
		it("renders image when image prop is provided and variant is fullWidth", () => {
			const imageUrl = "test-image.jpg";
			const { container } = render(
				<ActionBanner
					variant="fullWidth"
					title="Test Title"
					children="Test Children"
					image={imageUrl}
				/>
			);

			const imageElement = container.querySelector(
				".action-banner--full-width__image-container"
			);

			expect(imageElement).toBeInTheDocument();
			expect(imageElement).toHaveStyle({ backgroundImage: `url(${imageUrl})` });
		});

		it("does not render image when image prop is provided and variant is not fullWidth", () => {
			const { container } = render(
				<ActionBanner
					title="Test Title"
					children="Test Children"
					image="test-image.jpg"
				/>
			);

			const imageElement = container.querySelector(
				".action-banner--full-width__image-container"
			);

			expect(imageElement).not.toBeInTheDocument();
		});
	});

	describe("closing", () => {
		it("renders close button when onClosing prop is provided", () => {
			const { container } = render(
				<ActionBanner
					title="Test Title"
					children="Test Children"
					onClosing={() => {}}
				/>
			);

			const closeButton = container.querySelector(".action-banner__close");

			expect(closeButton).toBeInTheDocument();
		});

		it("should hide banner after clicking close button", async () => {
			const { container } = render(
				<ActionBanner title="Title" onClosing={jest.fn()}>
					Body
				</ActionBanner>
			);

			// First, check for the banner's existence
			expect(container.querySelector("section")).toBeInTheDocument();

			const button = screen.getByRole("button");
			userEvent.click(button);

			// Next, check that the banner has gone
			await waitFor(() => {
				expect(container.querySelector("section")).toBe(null);
			});
		});

		it("should call onClosing prop with component instance on close button click", async () => {
			const onClosing = jest.fn();
			const { container } = render(
				<ActionBanner title="Title" onClosing={onClosing}>
					Body
				</ActionBanner>
			);

			const button = screen.getByRole("button");
			userEvent.click(button);

			await waitFor(() => {
				expect(onClosing).toHaveBeenCalledTimes(1);
			});
		});

		it("should throw an error if onClosing prop is not a function", async () => {
			const notAFunction = "not a function";
			const spy = jest.spyOn(console, "error").mockImplementation(() => {});
			render(
				// @ts-expect-error
				<ActionBanner title="Title" onClosing={notAFunction}>
					Body
				</ActionBanner>
			);

			const button = screen.getByRole("button");
			userEvent.click(button);

			await waitFor(() => {
				expect(spy).toHaveBeenCalled();
				const errorMessage = spy.mock.calls[0][0].message;
				expect(errorMessage).toEqual("The onClosing prop should be a function");
			});

			spy.mockRestore();
		});
	});
});
