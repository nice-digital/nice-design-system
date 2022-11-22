import React, { ReactNode, ReactElement, ElementType, FC } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./../scss/stacked-nav.scss";

interface HeadingProps {
	label?: ReactNode;
	elementType?: ElementType | string;
	link?: HeadingLink;
}

interface HeadingLink {
	destination: string;
	isCurrent?: boolean;
	elementType?: React.ElementType | string;
	method?: string;
}

interface LinkElementProps {
	"aria-current": "true" | "false";
}

const Heading = (props: HeadingProps) => {
	const { elementType: ElementType = "p", label, link } = props;
	if (link) {
		const {
			elementType: LinkElementType = "a",
			isCurrent,
			destination,
			method
		} = link;
		const linkProps: LinkElementProps = {
			"aria-current": isCurrent ? "true" : "false",
			[method || (LinkElementType === "a" && "href") || "to"]: destination
		};

		return (
			<ElementType className="stacked-nav__root">
				<LinkElementType {...linkProps}>{label}</LinkElementType>
			</ElementType>
		);
	}
	return (
		<ElementType className="stacked-nav__root stacked-nav__root--no-link">
			{label}
		</ElementType>
	);
};

type StackedNavLinkType = React.FC<
	ChildStackedNavLinkProps | LabelStackedNavLinkProps
>;

interface ChildStackedNavLinkProps extends BaseStackedNavLinkProps {
	children: React.ReactNode;
	label?: never;
}

interface LabelStackedNavLinkProps extends BaseStackedNavLinkProps {
	label: React.ReactNode;
	children?: never;
}

interface BaseStackedNavLinkProps {
	[prop: string]: unknown;
	className?: string;
	destination?: string;
	isCurrent?: boolean;
	hint?: ReactNode;
	elementType?: ElementType | string;
	method?: string;
	nested?:
		| ReactElement<FC<StackedNavLinkType>>[]
		| ReactElement<FC<StackedNavLinkType>>
		| false;
}

export const StackedNavLink = (props: BaseStackedNavLinkProps) => {
	const {
		hint,
		destination,
		isCurrent,
		elementType: ElementType = "a",
		children,
		nested,
		className,
		method,
		...rest
	} = props;

	const label = props.label || children;

	if (!label) return null;

	const linkProps: LinkElementProps = {
		["aria-current"]: isCurrent ? "true" : "false",
		[method || (ElementType === "a" && "href") || "to"]: destination
	};

	return (
		<li className={classnames(["stacked-nav__list-item", className])} {...rest}>
			<ElementType {...linkProps}>
				<span className="stacked-nav__content-wrapper">
					{hint ? (
						<>
							{label}
							<span className="stacked-nav__hint">{hint}</span>
						</>
					) : (
						<>{label}</>
					)}
				</span>
			</ElementType>
			{nested && <ul className="stacked-nav__nested">{nested}</ul>}
		</li>
	);
};

export interface StackedNavProps {
	[prop: string]: unknown;
	label?: ReactNode;
	elementType?: ElementType | string;
	link?: HeadingLink;
	children:
		| ReactElement<FC<StackedNavLinkType>>
		| ReactElement<FC<StackedNavLinkType>>[];
	className?: string;
}

export const StackedNav = (props: StackedNavProps) => {
	const { label, elementType, link, children, className, ...rest } = props;
	const classNames = classnames(["stacked-nav", className]);
	return (
		<nav className={classNames} {...rest} data-component="stacked-nav">
			{label && <Heading label={label} elementType={elementType} link={link} />}
			{children && <ul className="stacked-nav__list">{children}</ul>}
		</nav>
	);
};
