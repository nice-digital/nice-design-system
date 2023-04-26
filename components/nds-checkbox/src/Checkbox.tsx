import React from "react";
import classnames from "classnames";

import "../scss/checkbox.scss";

export interface CheckboxProps {
	/** Allow any additional props to be passed and applied to the checkbox */
	[prop: string]: unknown;
	/** The name attribute for the checkbox */
	name: string;
	/** The label for the checkbox. If none supplied will use the value */
	label?: React.ReactNode;
	/** The value for the checkbox */
	value: string;
	/** Add to checkboxes that you would like to display inline, left to right */
	inline?: boolean;
	/** Option for putting the checkbox into a visual error state. Set to true for error styling or supply a string for error styling and addional error text*/
	error?: boolean | string;
	/** Add hint text for extra context to the checkbox */
	hint?: string;
}

export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
	const { error, inline, name, label, value, hint, ...rest } = props;
	if (!value) return null;
	const unique = name + "_" + value;
	const classNames = classnames({
		checkbox: true,
		"checkbox--inline": inline,
		"checkbox--error": error
	});
	return (
		<>
			{error && error.toString().length && (
				<p className="checkbox__error-message">{error}</p>
			)}
			<div className={classNames} data-component="checkbox">
				<div>
					<input
						type="checkbox"
						className="checkbox__input"
						id={unique}
						name={name}
						value={value}
						{...rest}
					/>
					<label className="checkbox__label" htmlFor={unique}>
						{label ? label : value}
					</label>
					{hint && <span className="checkbox__hint">{hint}</span>}
				</div>
			</div>
		</>
	);
};

export default Checkbox;
