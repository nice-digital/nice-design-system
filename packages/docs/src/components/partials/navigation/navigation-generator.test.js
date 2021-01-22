import { navigationGenerator } from "./navigation-generator";
import data from "./sample-nav-response.json";

test("Return nothing when nothing matches", () => {
	expect(navigationGenerator(data, "123", "fake/route")).toStrictEqual([]);
});

test("Return own slug and relevant siblings if there are no children", () => {
	expect(
		navigationGenerator(
			data,
			"e85398c4-6efe-574a-9a3d-481686124c74",
			"about/roadmap"
		)
	).toMatchSnapshot();
});

test("Return own slug and relevant siblings (without grandchildren) if there are no children", () => {
	expect(
		navigationGenerator(
			data,
			"e85398c4-6efe-574a-9a3d-481686124c74",
			"technical/javascript"
		)
	).toMatchSnapshot();
});

test("Return own slug and relevant siblings if there are no children (not at root level)", () => {
	expect(
		navigationGenerator(
			data,
			"6497583b-d599-5fa9-b172-a19e6e4f6568",
			"technical/sass-css/sass-documentation"
		)
	).toMatchSnapshot();
});

test("Return own slug and children if there are any", () => {
	expect(
		navigationGenerator(
			data,
			"a6a0bffd-8c6c-5af8-965d-19d1a911b5f4",
			"technical/sass-css/"
		)
	).toMatchSnapshot();
});

test("Return own slug and children but not grandchildren", () => {
	expect(
		navigationGenerator(
			data,
			"663ee135-4e10-586d-9b33-4b201aca6807",
			"technical/"
		)
	).toMatchSnapshot();
});
