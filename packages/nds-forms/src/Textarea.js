// @flow
import React, { Component, Fragment } from "react";
import "../scss/textarea.scss";

type TextareaProps = {
	hint: string,
	label: string,
	unique: string,
	hint: string,
};

export default class Textarea extends Component<TextareaProps> {

	render() {

		return (
			<div className="Form__group">
				<label
					className="Form__label"
					htmlFor={this.props.unique}>
					{this.props.label}
				</label>

				{this.props.hint &&
					<p className="Form__hint">
						{this.props.hint}
					</p>
				}

				<textarea
					className="Form__input Textarea__input"
					id="textarea"
					name="textarea">
						Default value
				</textarea>
			</div>
		);
	}
}
