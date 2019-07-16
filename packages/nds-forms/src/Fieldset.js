import React from "react";
import PropTypes from "prop-types";

import "./../scss/fieldset.scss";

export const Fieldset = props => {
	const { legend, children, className } = props;

	return (
		<fieldset className={`fieldset ${className}`}>
			<legend className="fieldset__legend">{legend}</legend>
			{children}
		</fieldset>
	);
};

Fieldset.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	className: PropTypes.string,
	legend: PropTypes.node.isRequired
};

export default Fieldset;
