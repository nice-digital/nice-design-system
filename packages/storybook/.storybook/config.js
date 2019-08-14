import { configure } from "@storybook/react";

// import '!style-loader!css-loader!sass-loader!./stories.scss';
import './stories.scss';

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
