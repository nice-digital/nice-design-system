// @flow
import React, { Component } from "react";
import "./../scss/fieldset.scss";

type FieldsetProps = {
	children: React.Node,
	className: string,
	legend: string,
};

export default class Fieldset extends Component<FieldsetProps> {

	render() {
		const {legend, children, className} = this.props;

		return (
			<fieldset className={`fieldset ${className}`} >
				<legend className="fieldset__legend">
					{legend}
				</legend>
				{children}
			</fieldset>
		);
	}
}
