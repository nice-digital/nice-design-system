import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "../scss/card.scss";

const CardHeader = (props) => {
	const { headingText, headingElementType: HeadingTag = "p", link } = props;

	let linkProps = {};

	if (link) {
		const { elementType: ElementType = "a", destination, method } = link;

		linkProps = {
			[method || (ElementType === "a" && "href") || "to"]: destination
		};

		return (
			<HeadingTag className="card__heading">
				<ElementType {...linkProps}>{headingText}</ElementType>
			</HeadingTag>
		);
	} else {
		return <HeadingTag className="card__heading">{headingText}</HeadingTag>;
	}
};

CardHeader.propTypes = {
	headingElementType: PropTypes.elementType,
	headingText: PropTypes.node.isRequired,
	link: PropTypes.shape({
		destination: PropTypes.node.isRequired,
		elementType: PropTypes.elementType,
		method: PropTypes.string
	})
};

const CardBody = (props) => {
	const { metadata, headingText, headingElementType, link, summary, children } =
		props;
	const headerProps = { headingText, headingElementType, link };
	return (
		<>
			<header className="card__header">
				<CardHeader {...headerProps} />
			</header>
			{summary && <p className="card__summary">{summary}</p>}

			{children && children}

			{metadata && metadata.length && (
				<dl className="card__metadata">
					{metadata.map((item, idx) => {
						if (!item.value) return null;
						return (
							<div key={`item${idx}`} className="card__metadatum">
								{item.label && (
									<dt
										className={classNames({
											"visually-hidden": !item.visibleLabel
										})}
									>
										{item.label}
									</dt>
								)}
								<dd>{item.value}</dd>
							</div>
						);
					})}
				</dl>
			)}
		</>
	);
};

CardBody.propTypes = {
	summary: PropTypes.node,
	children: PropTypes.node,
	metadata: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.node,
			value: PropTypes.node.isRequired,
			visibleLabel: PropTypes.bool
		})
	),
	...CardHeader.propTypes
};

export const Card = (props) => {
	const {
		className,
		metadata,
		headingText,
		headingElementType,
		link,
		image,
		summary,
		elementType: ContainerType = "article",
		children,
		...rest
	} = props;

	const cardBodyProps = {
		metadata,
		headingText,
		headingElementType,
		link,
		summary,
		children
	};

	const classes = classNames(["card", className]);

	return (
		<ContainerType className={classes} {...rest}>
			{image ? (
				<>
					<div className="card__image">{image}</div>
					<div className="card__text">
						<CardBody {...cardBodyProps} />
					</div>
				</>
			) : (
				<CardBody {...cardBodyProps} />
			)}
		</ContainerType>
	);
};

Card.propTypes = {
	elementType: PropTypes.elementType,
	image: PropTypes.node,
	children: PropTypes.node,
	...CardBody.propTypes
};
