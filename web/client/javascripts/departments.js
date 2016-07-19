/** @module departments */
import find from "lodash/find";


var depts = [
	"Dev",
	"BA",
	"Design",
	"UX",
	"Service Management",
	"Ops",
	"Test"];

console.log("Find", find);

var test = 1;
console.log(test);

/**
 * Gets something
 *
 * @return {string} A return value
 */
var exists = function(name: string): boolean {
	var item = find(depts, name);
	console.log("exists", name, item);
	return true;
};


module.exports = {
	/**
	 * Dpeartments variable
	 * @type {Array}
	 */
	depts: depts,
	exists: exists
};
