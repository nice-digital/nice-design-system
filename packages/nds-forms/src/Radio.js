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
		const { group, label, value, inline } = this.props;
		const classNames = inline ? "Radio Radio--inline" : "Radio";
		const unique = group + "_" + value;
		return (
			<div className={classNames}>
				<input
					className="Radio__input"
					name={group}
					type="radio"
					id={unique}
				/>

				<label
					className="Radio__label"
					htmlFor={unique}>
					{this.props.label}
				</label>
			</div>
		);
	}
}
