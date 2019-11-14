import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./../scss/form-group.scss";

export const FormGroup = props => {
	const { groupError, inline, legend, children, hint, name, ...rest } = props;

	const clonedChildren = React.Children.map(children, child => {
		return React.cloneElement(child, {
			name,
			inline,
			...rest
		});
	});

	const classes = classnames({
		"form-group": true,
		"form-group--no-legend": legend ? false : true
	});

	return (
		<fieldset className={classes}>
			{legend && <legend className="form-group__legend">{legend}</legend>}
			{groupError && <p className="form-group__error-message">{groupError}</p>}
			{hint && <p className="form-group__hint">{hint}</p>}
			{clonedChildren}
		</fieldset>
	);
};

FormGroup.propTypes = {
	children: PropTypes.node.isRequired,
	legend: PropTypes.node,
	name: PropTypes.string,
	hint: PropTypes.node,
	inline: PropTypes.bool,
	groupError: PropTypes.string
};
