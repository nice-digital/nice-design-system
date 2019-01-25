// @flow
import React, { Component } from "react";
import Fieldset from "./Fieldset";

type RadioGroupProps = {
	children: React.Node,
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
			<Fieldset legend={legend}>
				{hint && <p className="form__hint">{hint}</p>}
				{clonedChildren}
			</Fieldset>
		);
	}
}
