import React, { Component } from "react";
import { Radio, RadioGroup, Textarea, Input, Fieldset } from "@nice-digital/nds-forms";

import "./App.scss";

class App extends Component {
	render() {
		return (
			<div>

				<RadioGroup
					legend="Radio buttons (stacked, default)"
					group="group-1"
					hint="This is some hint text you can read">
					<Radio value="yes" label="Yes please!"/>
					<Radio value="no" label="No thanks!"/>
					<Radio value="maybe" label="Well maybe..? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo, facere harum necessitatibus nulla optio pariatur rem! Aut blanditiis dolores expedita minima mollitia nostrum rem! Accusamus aliquid, distinctio facilis harum illum magni nemo pariatur provident sequi vel, voluptates voluptatum!"/>
				</RadioGroup>

				<RadioGroup legend="Radio buttons inline" group="group-2" hint="This is some hint text you can read" inline>
					<Radio value="yes" label="Yes please!"/>
					<Radio value="no" label="No thanks!"/>
					<Radio value="maybe" label="Well maybe..?"/>
				</RadioGroup>

				<Fieldset legend="Textarea">
					<Textarea
						unique="textarea-1"
						label="Who do you think you are?"
						value="Default value for textarea"/>

					<Textarea
						unique="textarea-1"
						label="Who do you think you are?"
						hint="This is some hint text you can read"
						name="myCommentBox"/>

					<Textarea
						unique="textarea-1"
						label="Who do you think you are?"
						name="mySecondCommentBox"/>
				</Fieldset>


				<Fieldset legend="Inputs">
					<Input type="text" hint="Please fill in the below"	label="This is the question label?"/>
					<Input type="text" hint="Please fill in the below"	label="This is the question label?"/>
				</Fieldset>

			</div>
		);
	}
}

export default App;
