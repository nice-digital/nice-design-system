import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./../scss/formgroup.scss";

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
		formgroup: true,
		"formgroup--no-legend": legend ? false : true
	});

	return (
		<fieldset className={classes}>
			{legend && <legend className="formgroup__legend">{legend}</legend>}
			{groupError && <p className="formgroup__error-message">{groupError}</p>}
			{hint && <p className="formgroup__hint">{hint}</p>}
			{clonedChildren}
		</fieldset>
	);
};

FormGroup.propTypes = {
	children: PropTypes.node.isRequired,
	legend: PropTypes.node,
	name: PropTypes.string,
	hint: PropTypes.string,
	inline: PropTypes.bool,
	groupError: PropTypes.string
};
