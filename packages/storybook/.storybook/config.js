import React from "react";
import { configure, addDecorator } from "@storybook/react";
import "./stories.scss";

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
