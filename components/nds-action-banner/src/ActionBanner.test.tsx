import { render, screen } from "@testing-library/react";
import { ActionBanner } from "./ActionBanner";

describe("ActionBanner", () => {
	it("should render without crashing", () => {
		render(<ActionBanner title="Title">Some text</ActionBanner>);
		expect(false);
	});
});
