import React from "react";
import classNames from "classnames";
import "../scss/card.scss";

export interface CardHeadingLinkProps {
	[prop: string]: unknown;
	destination?: string;
	elementType?: React.ElementType;
	method?: string;
}

interface CardHeaderProps {
	headingElementType?: React.ElementType;
	headingText: React.ReactNode;
	link: CardHeadingLinkProps;
}

const CardHeader = (props: CardHeaderProps) => {
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

export interface CardBodyProps {
	[prop: string]: unknown;
	children?: React.ReactNode;
	summary?: React.ReactNode;
	headingElementType?: React.ElementType;
	headingText: React.ReactNode;
	link?: CardHeadingLinkProps;
	metadata?: CardMetaDataProps[];
}

interface CardMetaDataProps {
	[prop: string]: unknown;
	label?: string;
	value: React.ReactNode;
	visibleLabel?: boolean;
}

const CardBody = (props: CardBodyProps) => {
	const { metadata, headingText, headingElementType, link, summary, children } =
		props;
	const headerProps = {
		headingText,
		headingElementType: headingElementType as React.ElementType,
		link: link as CardHeadingLinkProps
	};
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

export interface CardProps {
	[prop: string]: unknown;
	children?: React.ReactNode;
	summary?: React.ReactNode;
	elementType?: React.ElementType;
	headingElementType?: React.ElementType;
	headingText: React.ReactNode;
	image?: React.ReactNode;
	link?: CardHeadingLinkProps;
	metadata?: Array<CardMetaDataProps>;
	className?: string;
}

export const Card = (props: CardProps) => {
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

	const classes = classNames(["card", `${className}`]);

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
