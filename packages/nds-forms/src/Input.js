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
				<div className="Input">
					<label className="Input__label">{label}</label>
					{hint && <p className="Input__hint">{hint}</p>}
					<input name={name} className="Input__input" type={type}/>
				</div>
			</Fragment>

		);
	}
}

