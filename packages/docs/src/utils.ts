import { ResponseObjectType } from "./components/partials/navigation/Navigation";

/**
 * Make the first character of a string uppercase
 *
 * @return {string} A capitalised string or null
 * @param string
 */
export function capitalise(string: string): string | null {
	return string ? string.charAt(0).toUpperCase() + string.slice(1) : null;
}

/**
 * Does a query item's slug start with the string provided?
 *
 * @return { boolean } Whether or not the string provided matches the start
 * @param item A graphql response object
 * @param this The slug to match against
 */
export function slugMatches(this: string, item: ResponseObjectType): boolean {
	return item.slug.indexOf(this) === 0;
}

/**
 * Format a query item into one suitable for navigation
 *
 * @param item A graphql response object
 * @param this The current item's ID to assess whether current
 * @return object
 */
export function formatList(
	this: string,
	item: ResponseObjectType
): { label: string; destination: string; isCurrent: boolean; order: number } {
	// yes we need separate type definitions
	return {
		label: item.frontmatter.navigationLabel || item.frontmatter.title,
		destination: item.slug,
		isCurrent: item.id === this,
		order: item.frontmatter.order || 999
	};
}

/**
 * Is an item's slug a sibling or direct child of the slug provided
 * @param item { object } A graphql response object
 * @param this { number } The current slug's length
 * @return { boolean } Is a sibling or a direct child
 */
export function isSiblingOrDirectChild(
	this: number,
	item: ResponseObjectType
): boolean {
	const itemSlugLength = item.slug.split("/").filter(i => i).length;
	return (
		itemSlugLength === this || itemSlugLength === this + 1 // we're at the same "level" // or at one "level" below
	);
}

/**
 * Is an item's slug a direct child of the slug provided
 * @param item { object } A graphql response object
 * @param this { number } The current slug's length
 * @return { boolean } Is a direct child
 */
export function isDirectChild(this: number, item: ResponseObjectType): boolean {
	const itemSlugLength = item.slug.split("/").filter(i => i).length;
	return (
		itemSlugLength === this + 1 // or at one "level" below
	);
}
