import { ReactNode, ElementType } from "react";
import classnames from "classnames";

export interface BreadcrumbProps {
	[prop: string]: unknown;
	children: ReactNode;
	to?: string;
	elementType?: ElementType;
	method?: string;
	className?: string;
}

export const Breadcrumb = (props: BreadcrumbProps) => {
	const { elementType, method, to, children, className, ...attributes } = props;

	let ElementType = elementType || "span";

	const innerTagProps = {
		...attributes
	};

	if (to) {
		ElementType = elementType || "a";
		innerTagProps[method || (ElementType === "a" && "href") || "to"] = to;
	}

	return (
		<li className={classnames(["breadcrumbs__crumb", className])}>
			<ElementType {...innerTagProps}>{children}</ElementType>
		</li>
	);
};
