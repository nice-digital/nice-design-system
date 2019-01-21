import React, { Component } from "react";
import { Radio, RadioGroup } from "@nice-digital/nds-forms";

import "./App.scss";

class App extends Component {
	render() {
		return (
			<div>
				<h1>Radio Buttons</h1>

				<RadioGroup legend="Example 1" group="example-1" help="This is some help text you can read.">
					<Radio value="yes" checked>Yes</Radio>
					<Radio value="no">No</Radio>
					<Radio value="maybe">Maybe</Radio>
				</RadioGroup>

				<RadioGroup legend="Example 2" group="example-2">
					<Radio value="yes">Yes</Radio>
					<Radio value="no" checked>No</Radio>
					<Radio value="maybe">Maybe</Radio>
				</RadioGroup>

				<RadioGroup legend="Example 3" group="example-3">
					<Radio value="yes">Yes</Radio>
					<Radio value="no">No</Radio>
					<Radio value="maybe" checked>Maybe</Radio>
				</RadioGroup>
			</div>
		);
	}
}

export default App;
