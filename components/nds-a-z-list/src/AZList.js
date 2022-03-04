import React from "react";
import PropTypes from "prop-types";
import "../scss/a-z-list.scss";

export const AZList = props => {
	const { alphabet: Alphabet, children, className, ...attrs } = props;

	return (
		<>
			<Alphabet className="a-z-list__alphabet" />
			<ol className={["a-z-list", className].join(" ")} {...attrs}>
				{children}
			</ol>
		</>
	);
};

AZList.propTypes = {
	alphabet: PropTypes.elementType.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string
};

export const AZListItem = props => {
	const { id, title, children, className, ...attrs } = props;

	const itemId = id || title.replace(" ", "").toLowerCase();

	return (
		<li className={["a-z-list__item", className].join(" ")} {...attrs}>
			<h2 className="a-z-list__item-heading" id={itemId}>
				{title}
			</h2>
			{children}
		</li>
	);
};

AZListItem.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string
};
