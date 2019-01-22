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
		return (
			<div className={classNames}>
				<input
					name={group}
					type="radio"
					id={group + "_" + value}
					className="Radio__input"
				/>
				<label
					htmlFor={group + "_" + value}
					className="Radio__label">
					{this.props.label}
				</label>
			</div>
		);
	}
}
