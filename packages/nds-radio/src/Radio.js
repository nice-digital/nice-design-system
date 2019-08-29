import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "../scss/radio.scss";

export class Radio extends Component {
	render() {
		const {
			disabled,
			error,
			group,
			label,
			value,
			inline,
			...rest
		} = this.props;
		if (!value || value === "") return null;
		const classNames = classnames({
			radio: true,
			"radio--inline": inline,
			"radio--error": error
		});
		const unique = `${group}_${value}`;
		return (
			<div className={classNames}>
				<input
					disabled={disabled}
					className="radio__input"
					name={group}
					type="radio"
					id={unique}
					{...rest}
				/>
				<label className="radio__label" htmlFor={unique}>
					{label ? label : value}
				</label>
			</div>
		);
	}
}

Radio.propTypes = {
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	group: PropTypes.string.isRequired,
	inline: PropTypes.bool,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};
