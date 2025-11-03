import React from "react";
import classnames from "classnames";

import "../scss/checkbox.scss";

export interface CheckboxGroupProps {
	/** Allow any additional props to be passed and applied to the checkbox */
	[prop: string]: unknown;
	/** The legend for the checkbox fieldset */
	legend?: string;
	/** The name attribute for the checkbox */
	name: string;
	/** Add to checkboxes that you would like to display inline, left to right */
	inline?: boolean;
	/** Option for putting the checkbox into a visual error state. Set to true for error styling or supply a string for error styling and addional error text*/
	error?: boolean | string;
	/** Add hint text for extra context to the checkbox */
	hint?: string;
	/** The values for the checkbox group */
	options: CheckboxOption[];

	legendIsHeading?: boolean;
}
export interface CheckboxOption {
	/** Name for the checkbox */
	name: string;
	/** Label for the checkbox */
	label: React.ReactNode;
	/** Value for the checkbox */
	value: string;
	/** Optional hint text under the checkbox label */
	hint?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
	const {
		legend,
		legendIsHeading = false,
		name,
		options,
		inline,
		hint,
		error,
		...rest
	} = props;
	console.log("CheckboxGroup props", props.error);
	const hasError = Boolean(
		error && error !== true && error.toString().trim().length > 0
	);
	// const optionsArray = Array.isArray(options) ? options : [];
	if (options?.length === 0) return null;
	console.log("CheckboxGroup render", options);

	const hintId = `${name}-hint`;
	const errorId = `${name}-error`;
	const describedBy =
		[hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") ||
		undefined;
	const classes = classnames({
		"checkbox-group": true,
		"checkbox-group--inline": inline,
		"checkbox-group--error": hasError
	});
	console.log("checkbox-group class:", classes);
	return (
		<div className="form-group">
			<fieldset className="fieldset" aria-describedby={describedBy}>
				{legend && (
					<legend className="fieldset__legend">
						{legendIsHeading ? <h1>{legend}</h1> : legend}
					</legend>
				)}
				{hint && (
					<p id={hintId} className="fieldset__hint">
						{hint}
					</p>
				)}
				{error && error.toString().length && (
					<p className="fieldset__error-message">{error}</p>
				)}
				<div data-component="checkbox-group" className={classes} role="group">
					{Array.isArray(options) &&
						options.map((option: CheckboxOption) => {
							const unique = `${name}_${option.value}`;

							return (
								<div key={option.value} className="checkbox-group__item">
									<input
										type="checkbox"
										className="checkbox-group__item__input"
										id={unique}
										name={name}
										aria-describedby={describedBy}
										{...rest}
										value={option.value}
									/>
									<label
										className="checkbox-group__item__label"
										htmlFor={unique}
									>
										{option.label}
									</label>
									{!inline && option.hint && (
										<span className="checkbox-group__hint">{option.hint}</span>
									)}
								</div>
							);
						})}
				</div>
			</fieldset>
		</div>
	);
};

export default CheckboxGroup;
