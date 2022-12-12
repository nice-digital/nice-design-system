import React from "react";
import classnames from "classnames";

import "./../scss/input.scss";

export interface InputProps {
	[prop: string]: unknown;
	className?: string;
	defaultValue?: string;
	error?: boolean;
	errorMessage?: string;
	hint?: string;
	inputRef?: React.Ref<HTMLInputElement>;
	label: string | null;
	name: string;
	type?:
		| "color"
		| "date"
		| "datetime-local"
		| "email"
		| "file"
		| "hidden"
		| "image"
		| "month"
		| "number"
		| "range"
		| "password"
		| "search"
		| "tel"
		| "text"
		| "time"
		| "url"
		| "week";
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
	const {
		defaultValue,
		name,
		inputRef,
		error,
		errorMessage,
		label = "Label",
		hint,
		type = "text",
		className = "",
		...rest
	} = props;
	const classNames = classnames({
		input: true,
		"input--error": error,
		[`${className}`]: className
	});
	return (
		<div className={classNames}>
			{label && (
				<label className="input__label" htmlFor={name}>
					{label}
				</label>
			)}
			{hint && <p className="input__hint">{hint}</p>}
			{error && <p className="input__error">{errorMessage}</p>}
			<input
				ref={inputRef}
				name={name}
				className="input__input"
				id={name}
				type={type}
				defaultValue={defaultValue}
				{...rest}
			/>
		</div>
	);
};
