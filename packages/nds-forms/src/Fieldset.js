// @flow
import React, { Component } from "react";
import "./../scss/fieldset.scss";

type FieldsetProps = {
	children: React.Node,
	legend: string,
};

export default class Fieldset extends Component<FieldsetProps> {

	render() {
		const {legend, children} = this.props;

		return (
			<fieldset className="fieldset">
				<legend className="fieldset__legend">
					{legend}
				</legend>
				{children}
			</fieldset>
		);
	}
}
