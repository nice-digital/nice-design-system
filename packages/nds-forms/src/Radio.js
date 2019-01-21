// @flow
import React, { Component } from "react";
import "../scss/radio.scss";

type RadioProps = {
	children: any,
	input: Object,
	group: string,
	label: string,
	value: string,
};

export default class Radio extends Component<RadioProps> {

	constructor(props){
		super(props);
	}


	render() {
		return (
			<div className="Radio">
				<input
					name={this.props.group}
					type="radio"
					id={this.props.group + "_" + this.props.value}
					className="Radio__input"
				/>
				<label
					htmlFor={this.props.group + "_" + this.props.value}
					className="Radio__label">
					{this.props.label}
				</label>
			</div>
		);
	}
}
