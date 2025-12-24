import React from "react";
import classnames from "classnames";
import "./../scss/form-group.scss";
import { isValidHeadingLevel } from "@nice-digital/nds-core";

export interface FormGroupProps {
	[prop: string]: unknown;
	inline?: boolean;
	name?: string;
	hint?: React.ReactNode;
	legend?: string;
	headingLevel?: number;
	children: React.ReactNode;
	groupError?: string | boolean;
}

export const FormGroup: React.FC<FormGroupProps> = (props: FormGroupProps) => {
	const {
		groupError,
		inline,
		legend,
		children,
		hint,
		name,
		headingLevel,
		...rest
	} = props;
	const HeadingTag =
		headingLevel && isValidHeadingLevel(headingLevel)
			? (`h${headingLevel}` as keyof JSX.IntrinsicElements)
			: "legend";
	const clonedChildren = React.Children.map(children, (child) => {
		return React.cloneElement(child as React.ReactElement, {
			inline,
			...rest,
			...(name ? { name } : {})
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
			{legend && (
				<legend className="form-group__legend">
					<HeadingTag>{legend}</HeadingTag>
				</legend>
			)}
			{groupError && <p className="form-group__error-message">{groupError}</p>}
			{hint && <p className="form-group__hint">{hint}</p>}
			{clonedChildren}
		</fieldset>
	);
};
