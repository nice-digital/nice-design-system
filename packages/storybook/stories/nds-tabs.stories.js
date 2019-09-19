import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Tabs, Tab } from "@nice-digital/nds-tabs";

storiesOf("Tabs", module).add("with some emoji", () => (
	<Tabs>
		<Tab title="test tab button title" id="tab-1">
			<span role="img" aria-label="so cool">
				😀 😎 👍 💯
			</span>
		</Tab>
		<Tab title="tab 2" id="tab-2">
			test content
		</Tab>
		<Tab title="tab 3 title">
			<h3>Here are some tabs</h3>
			<p className="lead">With some content</p>
		</Tab>
	</Tabs>
));
