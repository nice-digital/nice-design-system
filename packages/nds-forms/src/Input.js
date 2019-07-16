import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./../scss/input.scss";

export const Input = props => {
	const { error, errorMessage, unique, label, hint, type, ...rest } = props;
	const classNames = classnames({
		input: true,
		"input--error": error
	});
	return (
		<div className={classNames}>
			<label className="input__label" htmlFor={unique}>
				{label}
			</label>

			{hint && <p className="form__hint">{hint}</p>}

			{error && <p className="form__error">{errorMessage}</p>}

			<input
				name={name}
				className="input__input"
				id={unique}
				type={type}
				{...rest}
			/>
		</div>
	);
};

Input.propTypes = {
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	label: PropTypes.string.isRequired,
	unique: PropTypes.string.isRequired,
	hint: PropTypes.string,
	type: PropTypes.oneOf([
		"color",
		"date",
		"datetime-local",
		"email",
		"file",
		"hidden",
		"image",
		"month",
		"number",
		"range",
		"password",
		"search",
		"tel",
		"text",
		"time",
		"url",
		"week"
	]),
	name: PropTypes.string.isRequired
};

Input.defaultProps = {
	type: "text"
};

export default Input;
