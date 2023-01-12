import React from "react";
import classnames from "classnames";
import "./../scss/prev-next.scss";

export interface PrevNextLink {
	text: string;
	destination: string;
	elementType?: React.ElementType;
	intro?: string;
	method?: string;
}

export interface PrevNextProps {
	[prop: string]: unknown;
	previousPageLink?: PrevNextLink;
	nextPageLink?: PrevNextLink;
	className?: string;
}

const Link: React.FC<PrevNextLink> = ({
	text,
	destination,
	elementType: ElementType = "a",
	intro,
	method
}: PrevNextLink) => {
	let linkProps = {
		className: "prev-next__link",
		[method || (ElementType === "a" && "href") || "to"]: destination
	};
	return (
		<ElementType {...linkProps}>
			<span className="prev-next__link-intro">{intro}</span>
			<span className="prev-next__link-text">{text}</span>
		</ElementType>
	);
};

export const PrevNext: React.FC<PrevNextProps> = (props: PrevNextProps) => {
	const { nextPageLink, previousPageLink, className, ...rest } = props;

	let nextLinkProps: PrevNextLink | null,
		previousLinkProps: PrevNextLink | null;

	nextLinkProps = nextPageLink
		? {
				intro: nextPageLink?.intro || "Next page",
				text: nextPageLink?.text,
				destination: nextPageLink?.destination,
				elementType: nextPageLink?.elementType,
				method: nextPageLink?.method
		  }
		: null;

	previousLinkProps = previousPageLink
		? {
				intro: previousPageLink?.intro || "Previous page",
				text: previousPageLink?.text,
				destination: previousPageLink?.destination,
				elementType: previousPageLink?.elementType,
				method: previousPageLink?.method
		  }
		: null;

	return (
		<div className={classnames("prev-next", className)} {...rest}>
			{(nextPageLink || previousPageLink) && (
				<nav aria-label="Previous and next pages">
					{nextPageLink && nextLinkProps && <Link {...nextLinkProps} />}
					{previousPageLink && previousLinkProps && (
						<Link {...previousLinkProps} />
					)}
				</nav>
			)}
		</div>
	);
};
