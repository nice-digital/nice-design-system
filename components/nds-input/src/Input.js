import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./../scss/input.scss";

export const Input = (props) => {
	const {
		defaultValue,
		name,
		inputRef,
		error,
		errorMessage,
		label = "Label",
		hint,
		type = "text",
		className = "",
		...rest
	} = props;
	const classNames = classnames({
		input: true,
		"input--error": error,
		[className]: className
	});
	return (
		<div className={classNames}>
			{label && (
				<label className="input__label" htmlFor={name}>
					{label}
				</label>
			)}
			{hint && <p className="input__hint">{hint}</p>}
			{error && <p className="input__error">{errorMessage}</p>}
			<input
				ref={inputRef}
				name={name}
				className="input__input"
				id={name}
				type={type}
				defaultValue={defaultValue}
				{...rest}
			/>
		</div>
	);
};

Input.propTypes = {
	inputRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.object })
	]),
	className: PropTypes.string,
	defaultValue: PropTypes.string,
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	label: PropTypes.string,
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
