// @flow
import React, { Component } from "react";
import Fieldset from "./Fieldset";

type CheckboxGroupProps = {
	children: any,
	legend: string,
	hint: string,
	name: string,
	inline: boolean,
};

export default class CheckboxGroup extends Component<CheckboxGroupProps> {

	render() {

		const {inline, legend, children, hint, name, ...rest} = this.props;

		const clonedChildren = React.Children
			.map(children, child =>
				React.cloneElement(child, {name, inline, ...rest}));

		return (
			<Fieldset legend={legend}>
				{hint && <p className="form__hint">{hint}</p>}
				{clonedChildren}
			</Fieldset>

		);
	}
}
