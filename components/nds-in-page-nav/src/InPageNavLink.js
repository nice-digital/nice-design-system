/* eslint-disable indent */
import React from "react";
import PropTypes from "prop-types";

export const InPageNavLink = ({
	link: { subLinks, href, title },
	activeHeadingId
}) => {
	const targetId = href.replace("#", "");

	const hasActiveSubLink = subLinks.some(
		subLink => subLink.href.replace("#", "") === activeHeadingId
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
						: null
				}
			>
				{title}
			</a>
			{subLinks && subLinks.length > 0 && (
				<ol
					className="in-page-nav__list"
					aria-labelledby={`inpagenav-${targetId}`}
				>
					{subLinks.map(subLink => (
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

InPageNavLink.propTypes = {
	link: PropTypes.shape({
		title: PropTypes.string.isRequired,
		href: PropTypes.string.isRequired,
		subLinks: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string.isRequired,
				href: PropTypes.string.isRequired
			})
		)
	}).isRequired,
	activeHeadingId: PropTypes.string
};
