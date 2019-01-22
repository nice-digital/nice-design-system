// @flow
import React, { Component } from "react";
import "../scss/textarea.scss";

type TextareaProps = {
	label: string,
	unique: string,
	hint: string,
	value: string,
	name: string,
};

export default class Textarea extends Component<TextareaProps> {

	render() {

		const {label, unique, hint, value} = this.props;

		return (
			<div className="Textarea">
				<label
					className="Textarea__label"
					htmlFor={unique}>
					{label}
				</label>

				{hint && <p className="Textarea__hint">{hint}</p>}

				<textarea
					className="Textarea__input"
					id={unique}
					name={name}>
					{value}
				</textarea>
			</div>
		);
	}
}
