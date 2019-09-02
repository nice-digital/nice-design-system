import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "../scss/radio.scss";

export class Radio extends Component {
	render() {
		const {
			disabled,
			hint,
			error,
			name,
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
		const unique = `${name}_${value}`;
		return (
			<>
				{error && error.length && (
					<p className="radio__error-message">{error}</p>
				)}
				<div className={classNames}>
					<input
						disabled={disabled}
						className="radio__input"
						name={name}
						type="radio"
						id={unique}
						{...rest}
					/>
					<label className="radio__label" htmlFor={unique}>
						{label ? label : value}
					</label>
					{hint && <span className="checkbox__hint">{hint}</span>}
				</div>
			</>
		);
	}
}

Radio.propTypes = {
	disabled: PropTypes.bool,
	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	name: PropTypes.string.isRequired,
	inline: PropTypes.bool,
	label: PropTypes.string,
	value: PropTypes.string.isRequired,
	hint: PropTypes.string
};
