/* eslint react/prop-types: 0 */
import React from "react";
import { HorizontalNav } from "@nice-digital/nds-horizontal-nav";

import { storiesOf } from "@storybook/react";

const Default = () => <HorizontalNav monkey="true" />;

storiesOf("Components/Horizontal Nav", module).add("Default", Default);
