import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import "./stories.scss";

// Knobs everywhere!
addDecorator(withKnobs);

// Wrap all stories in a container
const wrapperDecorator = storyFn => (
	<div className="container">{storyFn()}</div>
);
addDecorator(wrapperDecorator);

const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
