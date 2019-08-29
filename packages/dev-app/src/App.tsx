import React, { Component } from "react";
// import Faker from "faker";

import { Checkbox } from "@nice-digital/nds-checkbox";
import "./App.scss";

class App extends Component {
	render() {
		return (
			<main>
				<p>Contact preferences</p>
				<Checkbox label="Email" value="email" name="contact-preference" />
				<Checkbox
					label="Telephone"
					value="telephone"
					name="contact-preference"
				/>
				<Checkbox label="Text Message" value="sms" name="contact-preference" />
			</main>
		);
	}
}

export default App;
