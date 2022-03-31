import React from "react";
import { configure, addDecorator } from "@storybook/react";

import "./stories.scss";

// wrap-storybook is the root for the HTML add-on to take markup from
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
	},
	options: {
		storySort: {
			order: ["Docs", "Foundations", "Components", "Typography"]
		}
	}
};
