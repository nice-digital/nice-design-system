// @flow
import React, { Component } from "react";
import classnames from "classnames";
import "../scss/textarea.scss";

type TextareaProps = {
	label: string,
	unique: string,
	hint: string,
	value: string,
	name: string,
	error: boolean,
	errorMessage: string,
};

export default class Textarea extends Component<TextareaProps> {

	render() {

		const {error, errorMessage, label, unique, hint, value} = this.props;
		const classNames = classnames({
			"textarea" : true,
			"textarea--error": error
		});

		return (
			<div className={classNames}>
				<label
					className="textarea__label"
					htmlFor={unique}>
					{label}
				</label>

				{hint && <p className="form__hint">{hint}</p>}

				{error && <p className="form__error">{errorMessage}</p>}

				<textarea
					className="textarea__input"
					id={unique}
					name={name}>
					{value}
				</textarea>
			</div>
		);
	}
}
