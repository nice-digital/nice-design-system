const express = require("express"),
	path = require("path"),
	sass = require("node-sass"),
	fs = require("fs");

// Create CSS file.
// In production this would be through a separate build process
sass.render({
	file: path.join(__dirname, "./app.scss"),
	includePaths: [
		path.join(__dirname, "./node_modules/@nice-digital/icons/scss")
	]
}, function(err, result) {
	if (err) {
		console.log(err.status);
		console.log(err.column);
		console.log(err.message);
		console.log(err.line);
	} else {
		fs.writeFile(path.join(__dirname, "./app.css"), result.css, function(err){
			if(!err){
				console.log("SASS compiled");
			}
		});
	}
});

// Create express app, using the webfont directly from the npm package
const app = express();
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "./index.html"));
});
app.get("/app.css", function(req, res) {
	res.sendFile(path.join(__dirname, "./app.css"));
});
app.use("/fonts", express.static(path.join(__dirname, "./node_modules/@nice-digital/icons/dist")));
app.listen(3000);

console.log("Running on port 3000");
