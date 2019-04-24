import { configure } from "@storybook/react";

import "./stories.scss";

// automatically import all files ending in *.stories.js
//const req = require.context("../packages", true, /^((?![\\/]node_modules|vendor[\\/]).)*__stories__\/.*\.stories\.js$/);
const req = require.context("../packages", true, /__stories__\/.*.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
