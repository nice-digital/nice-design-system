import React from "react";
import classnames from "classnames";

import "../scss/horizontal-nav.scss";

export interface HorizontalNavProps {
	[prop: string]: unknown;
	children: React.ReactNode;
	className?: string;
}

export interface HorizontalNavLinkProps {
	[prop: string]: unknown;
	children?: React.ReactNode;
	className?: string;
	destination: string;
	elementType?: React.ElementType;
	isCurrent?: boolean;
	method?: string;
	title?: string;
}

export const HorizontalNav: React.FC<HorizontalNavProps> = ({
	className,
	children,
	...rest
}: HorizontalNavProps) => {
	return (
		<nav className={classnames("horizontal-nav", className)} {...rest}>
			<ul className="horizontal-nav__list">{children}</ul>
		</nav>
	);
};

export const HorizontalNavLink: React.FC<HorizontalNavLinkProps> = ({
	title,
	isCurrent = false,
	destination,
	elementType: ElementType = "a",
	children,
	className,
	method,
	...rest
}: HorizontalNavLinkProps) => {
	// Would like to make method a required prop in the future but not possible without a breaking change
	const props = {
		"aria-current": isCurrent,
		className: classnames("horizontal-nav__link", className),
		[method || (ElementType === "a" && "href") || "to"]: destination
	};
	return (
		<li className="horizontal-nav__item">
			<ElementType {...props} {...rest}>
				{title || children || destination || "No Link"}
			</ElementType>
		</li>
	);
};
