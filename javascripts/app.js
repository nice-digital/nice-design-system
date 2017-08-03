
// IE8 doesn't support AnchorJS
if(typeof AnchorJS === "function") {
	var anchors = new AnchorJS();

	anchors.options = {
		placement: "left",
		visible: "touch"
	};
	anchors.add("[role='main'] h2, [role='main'] h3, [role='main'] h4");
	anchors.remove(".example h2, .example h3, .example h4, [data-no-anchor] h2, [data-no-anchor] h3");
}

$(document).ready(function() {

	// Load any plugins automatically
	$(document).nice();
});
