import React from "react";
import PropTypes from "prop-types";
import { Input } from "@nice-digital/nds-input";
import { Button } from "@nice-digital/nds-button";

import "./../scss/filter-input.scss";

export const FilterByInput = ({ type = "text", label, name, ...rest }) => {
	return (
		<>
			<Input type={type} label={label} name={name} {...rest} />
			<Button>Hello!</Button>
		</>
	);
};

FilterByInput.propTypes = {
	inputType: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

export default FilterByInput;
