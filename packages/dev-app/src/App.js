import React, { Component } from "react";
import { Radio, RadioGroup, Textarea, Input } from "@nice-digital/nds-forms";

import "./App.scss";

class App extends Component {
	render() {
		return (
			<div>

				<RadioGroup
					legend="Radio buttons (Stacked)"
					group="group-1"
					hint="This is some hint text you can read">
					<Radio value="yes" label="Yes please!"/>
					<Radio value="no" label="No thanks!"/>
					<Radio value="maybe" label="Well maybe..?"/>
				</RadioGroup>

				<RadioGroup
					legend="Radio buttons (Inline)"
					group="group-2"
					hint="This is some hint text you can read">
					<Radio value="yes" label="Yes please!"/>
					<Radio value="no" label="No thanks!"/>
					<Radio value="maybe" label="Well maybe..?"/>
				</RadioGroup>


				<fieldset className="Form__fieldset">

					<legend className="Form__legend">
						Textarea
					</legend>

					<Textarea
						unique="textarea-1"
						label="Who do you think you are?"
					/>

					<Textarea
						unique="textarea-1"
						label="Who do you think you are?"
						hint="This is some hint text you can read"
					/>

					<Textarea
						unique="textarea-1"
						label="Who do you think you are?"
					/>

				</fieldset>

				<Input/>

			</div>
		);
	}
}

export default App;
