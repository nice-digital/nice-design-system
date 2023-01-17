import React from "react";

export interface InPageNavLinkProps {
	link: {
		title: string;
		href: string;
		subLinks?: {
			title: string;
			href: string;
		}[];
	};
	activeHeadingId?: string | null;
}

export const InPageNavLink = ({
	link: { subLinks, href, title },
	activeHeadingId
}: InPageNavLinkProps) => {
	const targetId = href.replace("#", "");

	const hasActiveSubLink = subLinks?.some(
		(subLink) => subLink.href.replace("#", "") === activeHeadingId
	);

	return (
		<li className="in-page-nav__item">
			<a
				id={`inpagenav-${targetId}`}
				href={href}
				aria-current={
					targetId === activeHeadingId
						? "location"
						: hasActiveSubLink
						? "true"
						: undefined
				}
			>
				{title}
			</a>
			{subLinks && subLinks.length > 0 && (
				<ol
					className="in-page-nav__list"
					aria-labelledby={`inpagenav-${targetId}`}
				>
					{subLinks.map((subLink) => (
						<InPageNavLink
							key={subLink.href}
							link={subLink}
							activeHeadingId={activeHeadingId}
						/>
					))}
				</ol>
			)}
		</li>
	);
};
