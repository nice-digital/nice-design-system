/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import throttle from "lodash.throttle";

import { buildLinkTree, getActiveHeadingId } from "./utils";
import { InPageNavLink } from "./InPageNavLink";

import "./../scss/in-page-nav.scss";

export const InPageNav = ({
	className,
	headingsContainerSelector = "main",
	headingsSelector = "h2, h3",
	headingsExcludeSelector = "",
	scrollTolerance = 50, // In pixels
	...rest
}) => {
	const [activeHeadingId, setActiveHeadingId] = useState(null);
	const [linkTree, setlinkTree] = useState([]);

	// Build the tree if links to use in the nav, from the headings found on the page
	useEffect(() => {
		const headingsContainerElement = document.querySelector(
			headingsContainerSelector
		);

		if (headingsContainerElement) {
			const headingstoExclude = headingsExcludeSelector
				? Array.prototype.slice.call(
						headingsContainerElement.querySelectorAll(headingsExcludeSelector)
				  )
				: [];

			const headingsToUse = Array.prototype.slice
				.call(headingsContainerElement.querySelectorAll(headingsSelector))
				.filter(el => !headingstoExclude.includes(el));

			setlinkTree(buildLinkTree(headingsToUse));
		}

		return () => {
			setlinkTree([]);
		};
	}, [headingsContainerSelector, headingsSelector, headingsExcludeSelector]);

	// Now that we've built the tree of links, work out which is active based on scroll position
	useEffect(() => {
		const scrollHandler = throttle(() => {
			setActiveHeadingId(getActiveHeadingId(linkTree, scrollTolerance));
		}, 100);

		setActiveHeadingId(getActiveHeadingId(linkTree, scrollTolerance));
		window.addEventListener("scroll", scrollHandler, { passive: true });

		return () => {
			setActiveHeadingId(null);
			window.removeEventListener("scroll", scrollHandler, { passive: true });
		};
	}, [linkTree]);

	if (linkTree.length === 0) return null;

	return (
		<nav
			className={["in-page-nav", className].join(" ")}
			aria-labelledby="inpagenav-title"
			{...rest}
		>
			<h2 id="inpagenav-title" className="in-page-nav__title">
				On this page
			</h2>
			<ol
				className="in-page-nav__list"
				aria-label="Jump to sections on this page"
			>
				{linkTree.map(link => (
					<InPageNavLink
						key={link.href}
						link={link}
						activeHeadingId={activeHeadingId}
					/>
				))}
			</ol>
		</nav>
	);
};

InPageNav.propTypes = {
	className: PropTypes.string,
	headingsContainerSelector: PropTypes.string,
	headingsSelector: PropTypes.string,
	headingsExcludeSelector: PropTypes.string,
	scrollTolerance: PropTypes.number
};
