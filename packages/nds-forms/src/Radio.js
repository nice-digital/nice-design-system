// @flow
import React, { Component } from "react";
import "../scss/radio.scss";

type RadioProps = {
	children: any,
	input: Object,
	group: string,
};

export default class Radio extends Component<RadioProps> {
	render() {
		const {
			children,
			group,
			value,
			input,
			checked
		} = this.props;
		const unique = group + "_" + value;
		return (
			<div>
				<input
					checked={checked}
					type="radio"
					id={unique}
					name={group || ""}
					{...input}
				/>
				<label htmlFor={unique}>
					{children}
				</label>
			</div>
		);
	}
}
