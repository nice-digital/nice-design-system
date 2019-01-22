// @flow
import React, { Component } from "react";
import "../scss/checkbox.scss";

type CheckboxProps = {

};

export default class Checkbox extends Component<CheckboxProps> {

	render() {
		const unique = "checkbox";
		const label = "test";

		return (
			<div className="Checkbox">
				<input
					className="Checkbox__input"
					type="checkbox"
					id={unique}
				/>

				<label
					className="Checkbox__input"
					htmlFor={unique}>
					{label}
				</label>

				<h3>Set</h3>

				<div>
					<input type="checkbox" id="coding" name="interest" value="coding" checked/>
					<label htmlFor="coding">Coding</label>
				</div>

				<div>
					<input type="checkbox" id="music" name="interest" value="music"/>
					<label htmlFor="music">Music</label>
				</div>

			</div>
		);
	}
}
