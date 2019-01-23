// @flow
import React, { Component, Fragment } from "react";
import "./../scss/input.scss";

type InputProps = {
	label: string,
	hint: string,
	type: string,
	name: string,
};

export default class Input extends Component<InputProps> {

	render() {

		const { label, hint, type } = this.props;

		return (

			<Fragment>
				<div className="input">
					<label className="input__label">{label}</label>
					{hint && <p className="form__hint">{hint}</p>}
					<input name={name} className="input__input" type={type}/>
				</div>
			</Fragment>

		);
	}
}

