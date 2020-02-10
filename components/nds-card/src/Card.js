import React from "react";
import PropTypes from "prop-types";
import "../scss/card.scss";

const CardHeader = props => {
	const { headingText, headingElementType: HeadingTag = "p", link } = props;
	let linkProps = {};
	if (link) {
		const { elementType: LinkTag = "a", destination } = link;
		if (LinkTag === "a") {
			linkProps.href = destination;
		} else {
			linkProps.to = destination;
		}
		return (
			<HeadingTag className="card__heading">
				<LinkTag {...linkProps}>{headingText}</LinkTag>
			</HeadingTag>
		);
	} else {
		return <HeadingTag className="card__heading">{headingText}</HeadingTag>;
	}
};

export const Card = props => {
	const {
		metadata,
		headingText,
		headingElementType,
		link,
		elementType: ContainerType = "article",
		...rest
	} = props;
	const headerProps = { headingText, headingElementType, link };
	return (
		<ContainerType className="card" {...rest}>
			<header className="card__header">
				<CardHeader {...headerProps} />
			</header>
			{metadata && metadata.length && (
				<dl className="card__metadata">
					{metadata.map((item, idx) => {
						if (!item.value) return null;
						return (
							<div key={`item${idx}`} className="card__metadatum">
								{item.label && (
									<dt className="visually-hidden">{item.label}</dt>
								)}
								<dd>{item.value}</dd>
							</div>
						);
					})}
				</dl>
			)}
		</ContainerType>
	);
};

Card.propTypes = {
	elementType: PropTypes.elementType,
	headingElementType: PropTypes.elementType,
	headingText: PropTypes.node.isRequired,
	link: PropTypes.shape({
		destination: PropTypes.node,
		elementType: PropTypes.elementType
	}),
	metadata: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.node,
			value: PropTypes.node.isRequired
		})
	)
};
