import React from "react";
import PropTypes from "prop-types";

import Checkbox from "./Checkbox";
import Fieldset from "./Fieldset";

import "./../scss/forms.scss";

export const CheckboxGroup = props => {
	const { inline, legend, children, hint, name, ...rest } = props;

	const clonedChildren = React.Children.map(children, child =>
		React.cloneElement(child, { name, inline, ...rest })
	);

	return (
		<Fieldset legend={legend}>
			{hint && <p className="form__hint">{hint}</p>}
			{clonedChildren}
		</Fieldset>
	);
};

CheckboxGroup.propTypes = {
	children: PropTypes.arrayOf(Checkbox).isRequired,
	legend: PropTypes.node.isRequired,
	name: PropTypes.string.isRequired,
	hint: PropTypes.node,
	inline: PropTypes.bool
};

export default CheckboxGroup;
