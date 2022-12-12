import React, { Component } from "react";
import classnames from "classnames";
import "../scss/radio.scss";

export interface RadioProps {
	[prop: string]: unknown;
	disabled?: boolean;
	error?: boolean | string;
	name?: string;
	inline?: boolean;
	label?: React.ReactNode;
	value: string;
	hint?: string;
}

export const Radio: React.FC<RadioProps> = (props: RadioProps) => {
	const { disabled, hint, error, name, label, value, inline, ...rest } = props;
	if (!value || value === "") return null;
	const classNames = classnames({
		radio: true,
		"radio--inline": inline,
		"radio--error": error
	});
	const unique = `${name}_${value}`;

	return (
		<>
			{error && error.toString().length && (
				<p className="radio__error-message">{error}</p>
			)}
			<div className={classNames}>
				<input
					disabled={disabled}
					className="radio__input"
					name={name}
					type="radio"
					id={unique}
					{...rest}
				/>
				<label className="radio__label" htmlFor={unique}>
					{label ? label : value}
				</label>
				{hint && <span className="checkbox__hint">{hint}</span>}
			</div>
		</>
	);
};
