/**
 * Make the first character of a string uppercase
 *
 * @param {string} String to capitalise
 * @return {string} A capitalised string
 */
export function capitalise(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
