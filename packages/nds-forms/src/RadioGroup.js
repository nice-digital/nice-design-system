// @flow
import React, { Component } from "react";

type RadioGroupProps = {
	children: any,
	legend: string,
	group: string,
	help: string,
};

export default class RadioGroup extends Component<RadioGroupProps> {

	constructor(props){
		super(props);
	}

	render() {

		const {help, group, legend, children} = this.props;

		const clonedChildren = React.Children
			.map(children, child =>
				React.cloneElement(child, {group}));

		return (
			<fieldset className="Form__fieldset">
				<legend className="Form__legend">
					{legend}
				</legend>
				{help &&
					<p className="mt--0">{help}</p>
				}
				{clonedChildren}
			</fieldset>
		);
	}
}
