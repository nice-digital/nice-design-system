import { render, screen } from "@testing-library/react";
import { ActionBanner } from "./ActionBanner";

describe("ActionBanner", () => {
	it("should render child text", () => {
		const text = "Some text";
		const wrapper = render(<ActionBanner title="Title">{text}</ActionBanner>);
		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
