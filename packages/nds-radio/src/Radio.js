// @flow
import React, { Component } from "react";

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
			<label inline={inline} className={className}>
				<input {...input} type="radio"/>	
				<span>{children}</span>
			</label>
		);
	}
}
