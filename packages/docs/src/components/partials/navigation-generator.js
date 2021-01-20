import orderBy from "lodash/orderBy";

export default function navigationGenerator(
	navigation,
	currentId,
	currentSlug
) {
	// get all the entries that start with the current slug
	const relevant = navigation.filter(slugMatches, currentSlug);

	// if none of them match, return nout
	if (relevant.length === 0) {
		console.warn("No slugs matched");
		return [];
	}

	// if there's only one, you know there's no children
	else if (relevant.length === 1) {
		const arr = currentSlug.split("/").filter(i => i);
		// so we need the siblings that include the slug minus one segment
		arr.length = arr.length - 1;

		const parentSlug = arr.join("/");

		const unsorted = navigation.filter(slugMatches, parentSlug).map(formatList);

		return orderBy(unsorted, ["order", "label"]);
	} else {
		const currentSlugLength = currentSlug.split("/").filter(i => i).length;

		const unsorted = relevant
			.filter(isSiblingOrDirectChild, currentSlugLength)
			.map(formatList, currentId);

		return orderBy(unsorted, ["order", "label"]);
	}
}

function slugMatches(item) {
	const slug = this;
	return item.slug.indexOf(slug) === 0;
}

function formatList(item) {
	const currentId = this;
	return {
		label: item.frontmatter.navigationLabel || item.frontmatter.title,
		destination: item.slug,
		isCurrent: item.id === currentId,
		order: item.frontmatter.order || 999
	};
}

function isSiblingOrDirectChild(item) {
	const currentSlugLength = this;
	const itemSlugLength = item.slug.split("/").filter(i => i).length;
	return (
		itemSlugLength === currentSlugLength || // we're at the same "level"
		itemSlugLength === currentSlugLength + 1 // or at one "level" below
	);
}
