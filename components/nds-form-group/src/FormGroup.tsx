import React from "react";
import classnames from "classnames";
import "./../scss/form-group.scss";

export interface FormGroupProps {
	[prop: string]: unknown;
	inline?: boolean;
	name?: string;
	hint?: React.ReactNode;
	legend?: string;
	children: React.ReactNode;
	groupError?: string | boolean;
}

export const FormGroup: React.FC<FormGroupProps> = (props: FormGroupProps) => {
	const { groupError, inline, legend, children, hint, name, ...rest } = props;

	const clonedChildren = React.Children.map(children, (child) => {
		return React.cloneElement(child as React.ReactElement, {
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
		<fieldset
			className={classes}
			data-component={`form-group${inline ? "--inline" : ""}`}
		>
			{legend && <legend className="form-group__legend">{legend}</legend>}
			{groupError && <p className="form-group__error-message">{groupError}</p>}
			{hint && <p className="form-group__hint">{hint}</p>}
			{clonedChildren}
		</fieldset>
	);
};
