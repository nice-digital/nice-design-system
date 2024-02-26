import { render, screen } from "@testing-library/react";
import { ActionBanner, ActionBannerProps } from "./ActionBanner";
import { Button } from "./../../nds-button/src/Button";

import React from "react";

describe("ActionBanner", () => {
	it("should render child text", () => {
		const sampleText = "Some sample text";
		render(
			<ActionBanner
				title="Title"
				cta={
					<Button to="/test" variant="primary">
						Some CTA
					</Button>
				}
			>
				{sampleText}
			</ActionBanner>
		);
		expect(screen.getByText(sampleText)).toBeInTheDocument();
	});

	it("should match snapshot for default action banner", () => {
		const { container } = render(
			<ActionBanner
				title="Some title"
				cta={
					<Button to="/test" variant="primary">
						Some CTA
					</Button>
				}
			>
				Some body
			</ActionBanner>
		);
		expect(container).toMatchSnapshot();
	});

	it("should match snapshot for subtle action banner", () => {
		const { container } = render(
			<ActionBanner
				variant="subtle"
				title="Some title"
				cta={
					<Button to="/test" variant="primary">
						Some CTA
					</Button>
				}
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
				cta={
					<Button to="/test" variant="primary">
						Some CTA
					</Button>
				}
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
			<ActionBanner
				title="Some title"
				cta={
					<Button to="/test" variant="primary">
						Some CTA
					</Button>
				}
				className="mt--0"
			>
				Some body
			</ActionBanner>
		);
		expect(container.querySelector("section")).toHaveClass("mt--0");
	});

	it("should not render an empty CTA", () => {
		const { container } = render(
			<ActionBanner title="Title" cta="">
				Body
			</ActionBanner>
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
						cta={
							<Button to="/test" variant="primary">
								Some CTA
							</Button>
						}
					>
						Some body
					</ActionBanner>
				);

				expect(container.firstChild).toHaveClass(expectedClass);
			}
		);

		it("should have default 'action-banner' class when variant is undefined", () => {
			const { container } = render(
				<ActionBanner
					title="Some title"
					cta={
						<Button to="/test" variant="primary">
							Some CTA
						</Button>
					}
				>
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
						cta={
							<Button to="/test" variant="primary">
								Some CTA
							</Button>
						}
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
				cta={
					<Button to="/test" variant="primary">
						Some CTA
					</Button>
				}
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
					cta={
						<Button to="/test" variant="primary">
							Some CTA
						</Button>
					}
					image={imageUrl}
				>
					<p>Test children</p>
				</ActionBanner>
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
					image="test-image.jpg"
					cta={
						<Button to="/test" variant="primary">
							Some CTA
						</Button>
					}
				>
					<p>Test children</p>
				</ActionBanner>
			);

			const imageElement = container.querySelector(
				".action-banner--full-width__image-container"
			);

			expect(imageElement).not.toBeInTheDocument();
		});
	});
});
