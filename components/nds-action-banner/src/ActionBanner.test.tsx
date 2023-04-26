import { render, screen, waitFor } from "@testing-library/react";
import { ActionBanner } from "./ActionBanner";
import userEvent from "@testing-library/user-event";

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
});
