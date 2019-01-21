import React, { Component } from "react";
import { Radio, RadioGroup } from "@nice-digital/nds-forms";

import "./App.scss";

class App extends Component {
	render() {
		return (
			<div>
				<h1>Radio Buttons</h1>

				<RadioGroup
					legend="You contact preferences"
					group="group-one"
					help="This is some help text you can read.">
					<Radio value="yes" label="Yes please!"/>
					<Radio value="no" label="No thanks!"/>
					<Radio value="maybe" label="Well maybe..?"/>
				</RadioGroup>

			</div>
		);
	}
}

export default App;
