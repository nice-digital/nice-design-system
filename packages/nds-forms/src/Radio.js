// @flow
import React, { Component } from "react";
import classnames from "classnames";
import "../scss/radio.scss";

type RadioProps = {
	group: string,
	label: string,
	value: string,
	inline: boolean,
	error: boolean,
};

export default class Radio extends Component<RadioProps> {

	render() {
		const {error, group, label, value, inline, ...rest} = this.props;
		const classNames = classnames({
			"radio": true,
			"radio--inline": inline,
			"radio--error": error
		});
		const unique = group + "_" + value;
		return (
			<div className={classNames}>
				<input
					className="radio__input"
					name={group}
					type="radio"
					id={unique}
					{...rest}
				/>

				<label
					className="radio__label"
					htmlFor={unique}>
					{label}
				</label>
			</div>
		);
	}
}
