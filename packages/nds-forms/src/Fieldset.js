// @flow
import React, { Component } from "react";
import "./../scss/fieldset.scss";

type FieldsetProps = {
	children: any,
	legend: string,
};

export default class Fieldset extends Component<FieldsetProps> {

	render() {
		const {legend, children} = this.props;

		return (
			<fieldset className="Fieldset">
				<legend className="Fieldset__legend">
					{legend}
				</legend>
				{children}
			</fieldset>
		);
	}
}
