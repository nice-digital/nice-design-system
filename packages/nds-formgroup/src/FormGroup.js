import React from "react";
import PropTypes from "prop-types";
import "./../scss/formgroup.scss";

export const FormGroup = props => {
	return <p>Formgroup</p>;
	// const { inline, legend, children, hint, name, ...rest } = props;

	// const clonedChildren = React.Children.map(children, child =>
	// 	React.cloneElement(child, { name, inline, ...rest })
	// );

	// return (
	// 	<Fieldset legend={legend}>
	// 		{hint && <p className="form__hint">{hint}</p>}
	// 		{clonedChildren}
	// 	</Fieldset>
	// );
};

// FormGroup.propTypes = {
// 	children: PropTypes.arrayOf(Checkbox).isRequired,
// 	legend: PropTypes.node.isRequired,
// 	name: PropTypes.string.isRequired,
// 	hint: PropTypes.node,
// 	inline: PropTypes.bool
// };

// export default CheckboxGroup;

// import React from "react";
// import PropTypes from "prop-types";

// import Fieldset from "./Fieldset";

// import "./../scss/forms.scss";

// export const RadioGroup = props => {
// 	const { inline, hint, name, legend, children } = props;

// 	const clonedChildren = React.Children.map(children, child =>
// 		React.cloneElement(child, { name, inline })
// 	);

// 	return (
// 		<Fieldset legend={legend}>
// 			{hint && <p className="form__hint">{hint}</p>}
// 			{clonedChildren}
// 		</Fieldset>
// 	);
// };

// RadioGroup.propTypes = {
// 	children: PropTypes.oneOfType([
// 		PropTypes.arrayOf(PropTypes.node),
// 		PropTypes.node
// 	]).isRequired,
// 	legend: PropTypes.node.isRequired,
// 	name: PropTypes.string.isRequired,
// 	hint: PropTypes.node,
// 	inline: PropTypes.bool
// };
