import React, { Children, isValidElement, cloneElement } from "react";
import "../scss/alphabet.scss";

export interface AlphabetProps {
	id?: string;
	children: React.ReactElement<LetterProps>[];
	chunky?: boolean;
	className?: string;
	[key: string]: unknown;
}

export interface LetterProps {
	children: React.ReactNode;
	label?: string;
	chunky?: boolean;
	elementType?: React.ElementType;
	to?: string | false;
	[key: string]: unknown;
}

export interface LinkProps {
	text: React.ReactNode;
	destination: string;
	elementType?: React.ElementType;
	method?: string;
	ariaLabel?: string;
}

export const Alphabet: React.FC<AlphabetProps> = (props: AlphabetProps) => {
	const { children, className, id, chunky, ...attrs } = props;

	const chunkyChild = (child: React.ReactElement<LetterProps>) => {
		return isValidElement(child)
			? cloneElement(child, { chunky: true })
			: child;
	};

	return (
		<ol
			className={[
				`alphabet ${chunky ? "alphabet--chunky" : ""}`,
				className
			].join(" ")}
			id={id || "a-to-z"}
			{...attrs}
		>
			{chunky
				? Children.map(children, (child) => chunkyChild(child))
				: children}
		</ol>
	);
};

export const Letter: React.FC<LetterProps> = (props: LetterProps) => {
	const { children, label, to, chunky, elementType, ...attrs } = props;

	let body;

	if (!to) {
		// No link
		body = <span aria-label={label}>{children}</span>;
	} else if (to[0] === "#") {
		// Link to an id on the same page
		body = (
			<a href={to} aria-label={label}>
				{children}
			</a>
		);
	} else {
		// Link to somewhere else!
		body = (
			<Link
				elementType={elementType}
				ariaLabel={label}
				destination={to}
				text={children}
			/>
		);
	}

	return (
		<li
			className={`alphabet__letter ${chunky ? "alphabet__letter--chunky" : ""}`}
			{...attrs}
		>
			{body}
		</li>
	);
};

const Link: React.FC<LinkProps> = ({
	text,
	destination,
	elementType: ElementType = "a",
	method,
	ariaLabel
}: LinkProps) => {
	let linkProps = {
		className: "alphabet__link",
		[method || (ElementType === "a" && "href") || "to"]: destination
	};

	return (
		<ElementType aria-label={ariaLabel} {...linkProps}>
			{text}
		</ElementType>
	);
};
