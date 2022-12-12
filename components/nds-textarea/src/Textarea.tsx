import React from "react";
import classnames from "classnames";

import "../scss/textarea.scss";

export interface TextareaProps {
	[prop: string]: unknown;
	defaultValue?: string;
	error?: boolean;
	errorMessage?: string;
	hint?: string;
	label: string;
	name: string;
	textareaRef?: React.Ref<HTMLTextAreaElement>;
}

export const Textarea: React.FC<TextareaProps> = (props: TextareaProps) => {
	const {
		defaultValue,
		name,
		textareaRef,
		error,
		errorMessage,
		label,
		hint,
		...rest
	} = props;

	const classNames = classnames({
		textarea: true,
		"textarea--error": error
	});

	return (
		<div className={classNames}>
			<label className="textarea__label" htmlFor={name}>
				{label}
			</label>
			{hint && <p className="textarea__hint">{hint}</p>}
			{error && <p className="textarea__error">{errorMessage}</p>}
			<textarea
				className="textarea__textarea"
				id={name}
				name={name}
				ref={textareaRef}
				defaultValue={defaultValue}
				{...rest}
			/>
		</div>
	);
};
