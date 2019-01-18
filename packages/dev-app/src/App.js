import React, { Component } from "react";
import { Radio, RadioGroup } from "@nice-digital/nds-forms";

import "./App.css";

class App extends Component {
	render() {
		return (
			<RadioGroup>
				<Radio>Yes</Radio>
				<Radio>Yes</Radio>
				<Radio>Yes</Radio>
			</RadioGroup>
		);
	}
}

export default App;
