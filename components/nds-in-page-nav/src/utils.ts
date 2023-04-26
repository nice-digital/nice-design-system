import { string } from "prop-types";
import slugify from "slugify";

const numberPrefixRegex = /^\s*\d+\s*/;

/**
 * Generates a unique id for the given heading HTML element and sets its id attribute
 * @param {HTMLHeadingElement} headingEl
 * @returns The id of the heading
 */
export const generateHeadingId = (headingEl: HTMLHeadingElement): string => {
	if (headingEl.id) return headingEl.id;

	// Remove numbers from start of string before slugifying to make sure we have a valid id
	const text = (headingEl.textContent || headingEl.innerText).replace(
		numberPrefixRegex,
		""
	);

	const slug = slugify(text, {
		lower: true,
		strict: true
	});

	if (!document.getElementById(slug)) {
		headingEl.id = slug;
		return headingEl.id;
	}

	// Increment the integer suffix to make a unique id
	const slugPrefixRegex = new RegExp(`^${slug}(-[0-9]+)?`, "i"),
		isSlugPrefixMatch = (el: HTMLElement) =>
			el.id ? el.id.match(slugPrefixRegex) : false,
		matchingElements = Array.prototype.filter.call(
			document.querySelectorAll("[id]"),
			isSlugPrefixMatch
		),
		max = matchingElements.length;

	headingEl.id = `${slug}-${max + 1}`;
	return headingEl.id;
};

export interface LinkTreeItem {
	title: string;
	href: string;
	subLinks: LinkTreeItem[];
}

/**
 * Recursively builds a nested tree of links, from a flat list of heading elements.
 * @example
 * 	h2, h3, h3, h4, h2
 * Becomes:
 * 	h2
 * 	 h3
 * 	 h3
 * 	   h4
 * 	h2
 * @param {Array<HTMLHeadingElement>} headingElements The flat list of heading elements from which to build the tree
 * @param {Number | undefined} currentLevel The current heading level in the tree
 * @returns A tree of links with sublinks
 */
export const buildLinkTree = (
	headingElements: HTMLHeadingElement[],
	currentLevel: undefined | number = undefined
): LinkTreeItem[] => {
	if (!headingElements || headingElements.length === 0) return [];

	const linkTree = [];

	if (!currentLevel)
		currentLevel = parseInt(headingElements[0].tagName.substring(1));

	for (var i = 0; i < headingElements.length; i++) {
		const heading = headingElements[i],
			headingLevel = parseInt(heading.tagName.substring(1));

		if (headingLevel === currentLevel) {
			linkTree.push({
				title: heading.textContent as string,
				href: "#" + generateHeadingId(heading),
				// Recursively build up sub links
				subLinks: buildLinkTree(headingElements.slice(i + 1), currentLevel + 1)
			});
		} else if (currentLevel && headingLevel < currentLevel) return linkTree;
	}

	return linkTree;
};

const flattenTree = (linkTree: LinkTreeItem[]): LinkTreeItem[] => {
	return linkTree.reduce((acc, curr) => {
		return acc.concat(curr).concat(flattenTree(curr.subLinks));
	}, [] as LinkTreeItem[]);
};

export const getActiveHeadingId = (
	linkTree: LinkTreeItem[],
	scrollTolerance: number
): string | null => {
	const headingsAboveViewport = flattenTree(linkTree)
		.map(({ href }) => {
			const heading = document.querySelector(href);
			return { heading, y: heading?.getBoundingClientRect().top || 0 };
		})
		.filter(({ y }) => y - scrollTolerance <= 0);

	if (headingsAboveViewport.length === 0) return null;

	const reducedHeadings = headingsAboveViewport.reduce((prev, current) => {
		return prev.y > current.y ? prev : current;
	});

	return reducedHeadings?.heading?.id || null;
};
