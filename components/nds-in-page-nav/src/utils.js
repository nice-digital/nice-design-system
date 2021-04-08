import slugify from "slugify";

/**
 * Generates a unique id for the given heading HTML element and sets its id attribute
 * @param {HTMLHeadingElement} headingEl
 * @returns The id of the heading
 */
export const generateHeadingId = headingEl => {
	if (headingEl.id) return headingEl.id;

	const slug = slugify(headingEl.textContent || headingEl.innerText, {
		lower: true,
		strict: true
	});

	if (!document.getElementById(slug)) {
		headingEl.id = slug;
		return headingEl.id;
	}

	// Increment the integer suffix to make a unique id
	const slugPrefixRegex = new RegExp(`^${slug}(-[0-9]+)?`, "i"),
		isSlugPrefixMatch = el => (el.id ? el.id.match(slugPrefixRegex) : false),
		matchingElements = Array.prototype.filter.call(
			document.querySelectorAll("[id]"),
			isSlugPrefixMatch
		),
		max = matchingElements.length;

	headingEl.id = `${slug}-${max + 1}`;
	return headingEl.id;
};

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
export const buildLinkTree = (headingElements, currentLevel = undefined) => {
	if (!headingElements || headingElements.length === 0) return [];

	const linkTree = [];

	if (!currentLevel)
		currentLevel = parseInt(headingElements[0].tagName.substring(1));

	for (var i = 0; i < headingElements.length; i++) {
		const heading = headingElements[i],
			headingLevel = parseInt(heading.tagName.substring(1));

		if (headingLevel === currentLevel) {
			linkTree.push({
				title: heading.textContent,
				href: "#" + generateHeadingId(heading),
				// Recursively build up sub links
				subLinks: buildLinkTree(headingElements.slice(i + 1), currentLevel + 1)
			});
		} else if (headingLevel < currentLevel) return linkTree;
	}

	return linkTree;
};

const flattenTree = linkTree => {
	return linkTree.reduce((acc, curr) => {
		return acc.concat(curr).concat(flattenTree(curr.subLinks));
	}, []);
};

export const getActiveHeadingId = (linkTree, scrollTolerance) => {
	const headingsAboveViewport = flattenTree(linkTree)
		.map(({ href }) => {
			const heading = document.querySelector(href);
			return { heading, y: heading.getBoundingClientRect().top };
		})
		.filter(({ y }) => y - scrollTolerance <= 0);

	if (headingsAboveViewport.length === 0) return null;

	return headingsAboveViewport.reduce((prev, current) => {
		return prev.y > current.y ? prev : current;
	}).heading.id;
};
