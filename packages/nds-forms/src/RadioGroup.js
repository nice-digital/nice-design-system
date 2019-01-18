// @flow
import React, { Component, Fragment } from "react";

type RadioGroupProps = {
	inline: boolean,
	className: string,
	children: any,
	input: Object,
};

export default class RadioGroup extends Component<RadioGroupProps> {
	render() {
		const { inline, children, className, ...input } = this.props;
		return (
			<fieldset>
				<legend>
					Legend here!
				</legend>
				{children}
			</fieldset>
		);
	}
}
