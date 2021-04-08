import React from "react";
import PropTypes from "prop-types";

export const InPageNavLink = ({
	link: { subLinks, href, title },
	activeHeadingId
}) => {
	const targetId = href.replace("#", "");

	return (
		<li className="in-page-nav__item">
			<a
				id={`inpagenav-${targetId}`}
				href={href}
				aria-current={targetId === activeHeadingId ? "location" : "false"}
			>
				{title}
			</a>
			{subLinks && subLinks.length && (
				<ol
					className="in-page-nav__list"
					aria-labelledby={`inpagenav-${targetId}`}
				>
					{subLinks.map(subLink => (
						<InPageNavLink key={subLink} link={subLink} />
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
		subLinks: PropTypes.arrayOf({
			title: PropTypes.string.isRequired,
			href: PropTypes.string.isRequired
		})
	}).isRequired,
	activeHeadingId: PropTypes.string
};
