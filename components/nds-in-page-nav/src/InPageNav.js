import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import throttle from "lodash.throttle";

import { buildLinkTree, getActiveHeadingId } from "./utils";

import "./../scss/in-page-nav.scss";

import { InPageNavLink } from "./InPageNavLink";

export const InPageNav = ({
	headingsContainerSelector = "body",
	headingsSelector = "h2, h3",
	headingsExcludeSelector = "",
	scrollTolerance = 100,
	...rest
}) => {
	const [activeHeadingId, setActiveHeadingId] = useState(null);
	const [linkTree, setlinkTree] = useState([]);

	const scrollHandler = useCallback(
		throttle(() => {
			setActiveHeadingId(getActiveHeadingId(linkTree, scrollTolerance));
		}, 100),
		[linkTree]
	);

	useEffect(() => {
		const headingstoExclude = Array.prototype.slice.call(
			document
				.querySelector(headingsContainerSelector)
				.querySelectorAll(headingsExcludeSelector)
		);

		const headingsToUse = Array.prototype.slice
			.call(
				document
					.querySelector(headingsContainerSelector)
					.querySelectorAll(headingsSelector)
			)
			.filter(el => !headingstoExclude.includes(el));

		setlinkTree(buildLinkTree(headingsToUse));
		setActiveHeadingId(getActiveHeadingId(linkTree, scrollTolerance));
		window.addEventListener("scroll", scrollHandler);

		return () => {
			setlinkTree([]);
			setActiveHeadingId(null);
			window.removeEventListener("scroll", scrollHandler);
		};
	}, [headingsContainerSelector, headingsSelector, headingsExcludeSelector]);

	if (linkTree.length === 0) return null;

	return (
		<nav className="in-page-nav" aria-labelledby="inpagenav-title" {...rest}>
			<h2 id="inpagenav-title" className="in-page-nav__title">
				On this page
			</h2>
			<ol
				className="in-page-nav__list"
				aria-label="Jump links to sections on this page"
			>
				{linkTree.map(link => (
					<InPageNavLink
						key={link}
						link={link}
						activeHeadingId={activeHeadingId}
					/>
				))}
			</ol>
		</nav>
	);
};

InPageNav.propTypes = {
	headingsContainerSelector: PropTypes.string,
	headingsSelector: PropTypes.string,
	headingsExcludeSelector: PropTypes.string,
	scrollTolerance: PropTypes.number
};
