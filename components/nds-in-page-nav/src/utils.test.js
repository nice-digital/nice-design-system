import { buildLinkTree, generateHeadingId, getActiveHeadingId } from "./utils";

const linkTree = [
	{
		title: "Heading 2a",
		href: "#a2",
		subLinks: []
	},
	{
		title: "Heading 2b",
		href: "#b2",
		subLinks: [
			{
				title: "Heading 3a",
				href: "#a3",
				subLinks: []
			},
			{
				title: "Heading 3b",
				href: "#b3",
				subLinks: []
			}
		]
	},
	{
		title: "Heading 2c",
		href: "#c2",
		subLinks: []
	}
];

describe("utils", () => {
	describe("generateHeadingId", () => {
		it("should use existing id", () => {
			const heading = document.createElement("h3");
			heading.id = "test";

			generateHeadingId(heading);

			expect(heading).toHaveProperty("id", "test");
		});

		it("should generate id from slugified text content for empty id", () => {
			const someElement = document.createElement("span");
			someElement.textContent = "(with brackets item)";

			const heading = document.createElement("h3");
			heading.textContent = "Test: ";
			heading.append(someElement);

			generateHeadingId(heading);

			expect(heading).toHaveProperty("id", "test-with-brackets-item");
		});

		it("should generate unique id for multiple headings with same text", () => {
			const firstHeading = document.createElement("h2");
			firstHeading.textContent = "Test";
			document.body.append(firstHeading);

			const secondHeading = document.createElement("h3");
			secondHeading.textContent = "Test";
			document.body.append(secondHeading);

			const thirdHeading = document.createElement("h3");
			thirdHeading.textContent = "Test";
			document.body.append(thirdHeading);

			generateHeadingId(firstHeading);
			generateHeadingId(secondHeading);
			generateHeadingId(thirdHeading);

			expect(firstHeading).toHaveProperty("id", "test");
			expect(secondHeading).toHaveProperty("id", "test-2");
			expect(thirdHeading).toHaveProperty("id", "test-3");
		});
	});

	describe("buildLinkTree", () => {
		it("should return empty array when no headings", () => {
			expect(buildLinkTree([])).toStrictEqual([]);
		});

		it("should build link tree", () => {
			const createHeading = (level, id, text) => {
				const heading = document.createElement("h" + level);
				heading.id = id;
				heading.textContent = text;
				return heading;
			};

			const headings = [
				createHeading(2, "a2", "Heading 2a"),
				createHeading(2, "b2", "Heading 2b"),
				createHeading(3, "a3", "Heading 3a"),
				createHeading(3, "b3", "Heading 3b"),
				createHeading(2, "c2", "Heading 2c")
			];

			expect(buildLinkTree(headings)).toStrictEqual(linkTree);
		});
	});

	describe("getActiveHeadingId", () => {
		it("should return null when no headings are scrolled past", () => {
			const spy = jest
				.spyOn(document, "querySelector")
				.mockImplementation(selector => ({
					textContent: selector,
					getBoundingClientRect: () => ({ top: 999 })
				}));

			expect(getActiveHeadingId(linkTree, 100)).toBeNull();

			spy.mockReset();
		});

		it("should select first heading scrolled above the viewport", () => {
			const spy = jest
				.spyOn(document, "querySelector")
				.mockImplementation(selector => ({
					id: selector.split("#")[1],
					getBoundingClientRect: () => ({
						top: selector == "#b2" ? -2 : selector == "#a3" ? -1 : 999
					})
				}));

			expect(getActiveHeadingId(linkTree, 100)).toBe("a3");

			spy.mockReset();
		});
	});
});
