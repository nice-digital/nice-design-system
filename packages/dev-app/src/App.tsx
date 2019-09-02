import React, { Component } from "react";
import Faker from "faker";

import { Tag } from "@nice-digital/nds-tag";
import { Card } from "@nice-digital/nds-card";
import { CardProps } from "@nice-digital/nds-card";
import { Radio } from "@nice-digital/nds-radio";
import "./App.scss";

class App extends Component {
	render() {
		return (
			<main>
				<Radio value="yes" label="Yes, please." name="my-group" hint="Here's a lovely hint for you" />
				<Radio value="no" label="No, thank you." name="my-group" />
				<Radio value="error" label="Error!" error={true} name="my-group" />
				<Radio
					value="error"
					label="Error!"
					error="You've done something wrong!"
					name="my-group"
				/>
				<Radio
					value="disabled"
					label="Disabled"
					disabled={true}
					name="my-group"
				/>
			</main>
		);
	}
}

export default App;
