import React, { cloneElement } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { deepMap } from "react-children-utilities";
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

function createImage(imageElement) {
	return cloneElement(imageElement, {
		className: classnames(imageElement.props.className, "card__image")
	});
}

function AddClassToImage(element) {
	if (element.type === "img") return createImage(element);
	const { children } = element.props;
	return deepMap(children, child => {
		if (child && child.type === "img") {
			return createImage(child);
		}
		return child;
	});
}

export const Card = props => {
	const {
		metadata,
		headingText,
		headingElementType,
		link,
		image: Image,
		children,
		elementType: ContainerType = "article",
		...rest
	} = props;
	const headerProps = { headingText, headingElementType, link };
	return (
		<ContainerType className="card" {...rest}>
			{Image && AddClassToImage(Image)}
			<div className="card__text">
				<header className="card__header">
					<CardHeader {...headerProps} />
				</header>
				{children && <div className="card__summary">{children}</div>}
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
			</div>
		</ContainerType>
	);
};

Card.propTypes = {
	children: PropTypes.node,
	elementType: PropTypes.elementType,
	headingElementType: PropTypes.elementType,
	headingText: PropTypes.node.isRequired,
	image: PropTypes.node,
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
