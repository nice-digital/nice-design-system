// @flow
import React, { Component } from "react";
import "../scss/radio.scss";

type RadioProps = {
	group: string,
	label: string,
	value: string,
	inline: boolean,
};

export default class Radio extends Component<RadioProps> {

	render() {
		const {group, label, value, inline, ...rest} = this.props;
		const classNames = inline ? "radio radio--inline" : "radio";
		const unique = group + "_" + value;
		return (
			<div className={classNames}>
				<input
					className="radio__input"
					name={group}
					type="radio"
					id={unique}
					{...rest}
				/>

				<label
					className="radio__label"
					htmlFor={unique}>
					{label}
				</label>
			</div>
		);
	}
}
