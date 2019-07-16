import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../scss/textarea.scss";

export const Textarea = props => {
	const { error, errorMessage, label, unique, hint, value } = props;

	const classNames = classnames({
		textarea: true,
		"textarea--error": error
	});

	return (
		<div className={classNames}>
			<label className="textarea__label" htmlFor={unique}>
				{label}
			</label>

			{hint && <p className="form__hint">{hint}</p>}

			{error && <p className="form__error">{errorMessage}</p>}

			<textarea
				className="textarea__input"
				id={unique}
				name={name}
				defaultValue={value}
			/>
		</div>
	);
};

Textarea.propTypes = {
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	label: PropTypes.string.isRequired,
	unique: PropTypes.string,
	hint: PropTypes.string,
	value: PropTypes.string,
	name: PropTypes.string.isRequired
};

export default Textarea;
