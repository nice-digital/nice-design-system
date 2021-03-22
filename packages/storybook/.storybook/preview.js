import React from "react";
import { configure, addDecorator } from "@storybook/react";

import "./stories.scss";

// Wrap all stories in a container
const wrapperDecorator = storyFn => (
	<div className="pv--d" id="wrap-storybook">
		{storyFn()}
	</div>
);

addDecorator(wrapperDecorator);

// const req = require.context("../stories", true, /\.stories\.js$/);

// function loadStories() {
// 	req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);

export const parameters = {
	html: {
		root: "#wrap-storybook"
	}
};
