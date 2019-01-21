// @flow
import React, { Component } from "react";

type RadioGroupProps = {
	children: any,
	input: Object,
	legend: string,
	group: string,
};

export default class RadioGroup extends Component<RadioGroupProps> {
	render() {

		const {input, group, legend, children} = this.props;

		const childrenWithProps = React.Children
			.map(children, child =>
				React.cloneElement(child, {input, group}));

		return (
			<fieldset>
				<legend>{legend}</legend>
				{childrenWithProps}
			</fieldset>
		);
	}
}
