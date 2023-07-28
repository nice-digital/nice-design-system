/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import throttle from "lodash.throttle";

import { buildLinkTree, getActiveHeadingId, type LinkTreeItem } from "./utils";
import { InPageNavLink } from "./InPageNavLink";

import "./../scss/in-page-nav.scss";

export interface InPageNavProps {
	[prop: string]: unknown;
	className?: string;
	headingsContainerSelector?: string;
	headingsSelector?: string;
	headingsExcludeSelector?: string;
	headingsExcludeContainer?: string;
	scrollTolerance?: number;
	noScroll?: boolean;
	twoColumns?: boolean;
}

export const InPageNav = ({
	className,
	headingsContainerSelector = "main",
	headingsSelector = "h2, h3",
	headingsExcludeSelector = "", // Exclude any matched elements
	headingsExcludeContainer = "", // Exclude all headings within this container
	scrollTolerance = 50, // In pixels
	noScroll = false,
	twoColumns = false,
	...rest
}: InPageNavProps) => {
	const [activeHeadingId, setActiveHeadingId] = useState<null | string>(null);
	const [linkTree, setlinkTree] = useState<LinkTreeItem[]>([]);
	const titleId = "inpagenav-title";

	// Build the tree of links from the headings on the page
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

			// If we've specified a whole container to exclude,
			// search for any headings within each matched container
			if (headingsExcludeContainer) {
				const excludedElements = document.querySelectorAll(
					headingsExcludeContainer
				);
				if (excludedElements.length) {
					excludedElements.forEach((element) => {
						const headingsWithinExcludedContainer =
							element.querySelectorAll(headingsSelector);
						headingstoExclude.push(...headingsWithinExcludedContainer);
					});
				}
			}

			const headingsToUse = Array.prototype.slice
				.call(headingsContainerElement.querySelectorAll(headingsSelector))
				.filter((el) => headingstoExclude.indexOf(el) === -1);

			setlinkTree(buildLinkTree(headingsToUse));
		}

		return () => {
			setlinkTree([]);
		};
	}, [headingsContainerSelector, headingsSelector, headingsExcludeSelector]);

	// Now that we've built the tree of links, work out which is active based on scroll position
	useEffect(() => {
		if (noScroll) return; // No point highlighting links in the no scroll variant

		const scrollHandler = throttle(() => {
			setActiveHeadingId(getActiveHeadingId(linkTree, scrollTolerance));
		}, 100);

		setActiveHeadingId(getActiveHeadingId(linkTree, scrollTolerance));
		window.addEventListener("scroll", scrollHandler, { passive: true });

		return () => {
			setActiveHeadingId(null);
			window.removeEventListener("scroll", scrollHandler);
		};
	}, [linkTree]);

	if (linkTree.length === 0) return null;

	const classNames = ["in-page-nav"];
	if (className) {
		classNames.push(className);
	}
	if (noScroll) {
		classNames.push("in-page-nav--no-scroll");

		// We're only allowing two columns within the noScroll variant
		if (twoColumns) {
			classNames.push("in-page-nav--two-columns");
		}
	}

	return (
		<nav
			className={classNames.join(" ")}
			aria-labelledby={titleId}
			data-component="in-page-nav"
			{...rest}
		>
			<h2 id={titleId} className="in-page-nav__title">
				On this page
			</h2>
			<ol
				className="in-page-nav__list"
				aria-label="Jump to sections on this page"
			>
				{linkTree.map((link) => (
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
