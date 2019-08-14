import React from "react";

import { storiesOf } from "@storybook/react";

import { Radio } from "@nice-digital/nds-radio";

const RadioDefault = () => <Radio label="Welcome to nice here is some text"/>;

storiesOf("Radio", module).add("default", RadioDefault);
