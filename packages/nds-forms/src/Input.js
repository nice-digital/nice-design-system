// @flow
import React, { Component } from "react";
import classnames from "classnames";
import "./../scss/input.scss";

type InputProps = {
	error: boolean,
	errorMessage: string,
	label: string,
	hint: string,
	type: string,
	name: string,
};

export default class Input extends Component<InputProps> {

	render() {

		const { error, errorMessage, label, hint, type, ...rest } = this.props;
		const classNames = classnames({
			"input": true,
			"input--error": error,
		});
		return (
			<div className={classNames}>
				<label className="input__label">{label}</label>

				{hint && <p className="form__hint">{hint}</p>}

				{error && <p className="form__error">{errorMessage}</p>}

				<input name={name} className="input__input" type={type} {...rest} />
			</div>
		);
	}
}

