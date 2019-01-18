// @flow
import React, { Component } from "react";
import "../scss/radio.scss";

type RadioProps = {
	inline: boolean,
	className: string,
	children: any,
	input: Object,
};

export default class Radio extends Component<RadioProps> {
	render() {
		const { inline, children, className, ...input } = this.props;
		return (
			<div className="form__group form__group--radio form__group--inline">
				<input {...input} type="radio" className="form__radio"/>
				<label inline={inline} className="form__label form__label--radio">{children}</label>
			</div>
		);
	}
}
