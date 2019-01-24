// @flow
import React, { Component } from "react";
import "../scss/checkbox.scss";
import classnames from "classnames";

type CheckboxProps = {
	name: string,
	label: string,
	value: string,
	inline: boolean,
	error: boolean,
};

export default class Checkbox extends Component<CheckboxProps> {

	render() {
		const {error, inline, name, label, value, ...rest} = this.props;
		const unique = name + "_" + value;
		// const classNames = inline ? "checkbox checkbox--inline" : "checkbox";
		const classNames = classnames({
			"checkbox": true,
			"checkbox--inline": inline,
			"checkbox--error": error
		});
		return (
			<div className={classNames}>
				<input
					type="checkbox"
					className="checkbox__input"
					id={unique}
					name={name}
					value={value}
					{...rest}
				/>
				<label
					className="checkbox__label"
					htmlFor={unique}>
					{label}
				</label>
			</div>
		);
	}
}
