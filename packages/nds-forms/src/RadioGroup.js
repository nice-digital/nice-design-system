// @flow
import React, { Component } from "react";

type RadioGroupProps = {
	children: any,
	legend: string,
	group: string,
	hint: string,
};

export default class RadioGroup extends Component<RadioGroupProps> {

	constructor(props){
		super(props);
	}

	render() {

		const {hint, group, legend, children} = this.props;

		const clonedChildren = React.Children
			.map(children, child =>
				React.cloneElement(child, {group}));

		return (
			<fieldset className="Form__fieldset">
				<legend className="Form__legend">
					{legend}
				</legend>
				{hint &&
					<p className="Form__hint">{hint}</p>
				}
				{clonedChildren}
			</fieldset>
		);
	}
}
