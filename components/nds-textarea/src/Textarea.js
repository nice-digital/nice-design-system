import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../scss/textarea.scss";

export const Textarea = props => {
	const {
		defaultValue,
		name,
		textareaRef,
		error,
		errorMessage,
		label,
		hint,
		...rest
	} = props;

	const classNames = classnames({
		textarea: true,
		"textarea--error": error
	});

	return (
		<div className={classNames}>
			<label className="textarea__label" htmlFor={name}>
				{label}
			</label>
			{hint && <p className="textarea__hint">{hint}</p>}
			{error && <p className="textarea__error">{errorMessage}</p>}
			<textarea
				className="textarea__textarea"
				id={name}
				name={name}
				ref={textareaRef}
				defaultValue={defaultValue}
				{...rest}
			/>
		</div>
	);
};

Textarea.propTypes = {
	defaultValue: PropTypes.string,
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	hint: PropTypes.string,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	textareaRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.object })
	])
};

export default Textarea;
