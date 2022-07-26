import React, { Children, isValidElement, cloneElement } from "react";
import PropTypes from "prop-types";
import "../scss/alphabet.scss";

export const Alphabet = (props) => {
	const { children, className, id, chunky, ...attrs } = props;

	const chunkyChild = (child) => {
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

Alphabet.propTypes = {
	id: PropTypes.string,
	children: PropTypes.node.isRequired,
	chunky: PropTypes.bool,
	className: PropTypes.string
};

export const Letter = (props) => {
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

Letter.propTypes = {
	children: PropTypes.node.isRequired,
	chunky: PropTypes.bool,
	label: PropTypes.string,
	to: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	elementType: PropTypes.elementType
};

const Link = ({
	text,
	destination,
	elementType: ElementType = "a",
	method,
	ariaLabel
}) => {
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

Link.propTypes = {
	text: PropTypes.string,
	destination: PropTypes.string,
	elementType: PropTypes.elementType,
	method: PropTypes.string,
	ariaLabel: PropTypes.string
};
