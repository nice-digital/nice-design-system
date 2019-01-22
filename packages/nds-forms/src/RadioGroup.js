// @flow
import React, { Component } from "react";

type RadioGroupProps = {
	children: any,
	legend: string,
	group: string,
	hint: string,
	inline: boolean,
};

export default class RadioGroup extends Component<RadioGroupProps> {

	render() {
		const {inline, hint, group, legend, children} = this.props;

		const clonedChildren = React.Children
			.map(children, child =>
				React.cloneElement(child, {group, inline}));

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
