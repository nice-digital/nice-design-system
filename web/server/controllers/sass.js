/*eslint-env node*/
var express = require("express"),
	router = express.Router(),
	fs = require("fs"),
	path = require("path"),
	_ = require("lodash");

var data = JSON.parse(fs.readFileSync(path.join(__dirname, "./../../../dist/docs/sass/sass.json"), "utf-8"));

// Returns true if the given group id has at least 1 item
let getItems =
	(groupId) => _.filter(data.items, (i) => i.group.indexOf(groupId) > -1 );

/**
 * Documentation homepage
 */
router.get("/docs", function(req, res) {

	// Map group data into a useable view model
	let pageData = {
		groups: _(data.groups)
			.map((val, key) => ({
				id: key,
				name: val,
				types: _.mapValues(data.byGroupAndType[key], v => v.length)
			}))
			.filter((group) => getItems(group.id).length)
			.value()
	};

	res.render("sass/docs", pageData);
});

/**
 * Documentation group.
 * Maps the SASS docs generated JSON into a useable format
 */
router.get("/docs/:section", function(req, res, next) {

	let group = data.groups[req.params.section],
		items = getItems(req.params.section);
	if(group && items.length) {

		let pageData = {
			groupId: req.params.section,
			groupName: group,
			items: items,
			byType: data.byGroupAndType[req.params.section],
			display: data.display
		};
		res.render("sass/docs-group", pageData);
	}
	else {
		next();
	}
});

module.exports = router;
