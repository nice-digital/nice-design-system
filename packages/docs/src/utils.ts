/**
 * Make the first character of a string uppercase
 *
 * @return {string} A capitalised string or null
 * @param string
 */
export function capitalise(string: string): string | null {
	return string ? string.charAt(0).toUpperCase() + string.slice(1) : null;
}
