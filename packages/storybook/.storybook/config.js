import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import niceTheme from "./nice-theme";

import "./stories.scss";

addParameters({
	options: {
		theme: niceTheme
	}
});

// Knobs everywhere!
addDecorator(withKnobs);

// Check accessibility in stories
addDecorator(withA11y);

// Wrap all stories in a container
const wrapperDecorator = storyFn => (
	<div className="container pt--d">{storyFn()}</div>
);
addDecorator(wrapperDecorator);

const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
