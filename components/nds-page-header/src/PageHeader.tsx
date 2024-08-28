import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import "../scss/page-header.scss";

export interface PageHeaderProps {
	[prop: string]: unknown;
	useAltHeading?: boolean;
	preheading?: React.ReactNode;
	breadcrumbs?: React.ReactNode;
	heading: React.ReactNode;
	metadata?: React.ReactNode[];
	lead?: React.ReactNode;
	description?: React.ReactNode;
	cta?: React.ReactNode;
	secondSection?: React.ReactNode;
	verticalPadding?: "loose";
	variant?: "normal" | "fullWidthDark" | "fullWidthLight";
}

export const PageHeader: React.FC<PageHeaderProps> = (
	props: PageHeaderProps
) => {
	const {
		useAltHeading = false,
		preheading,
		breadcrumbs,
		heading,
		metadata,
		lead,
		description,
		cta,
		secondSection,
		verticalPadding,
		variant = "normal",
		...rest
	} = props;

	// Figure out variant
	const isFullWidth =
		variant === "fullWidthDark" || variant === "fullWidthLight";
	let variantClassname = "";
	switch (variant) {
		case "fullWidthDark":
			variantClassname = "page-header--full-width-dark";
			break;
		case "fullWidthLight":
			variantClassname = "page-header--full-width-light";
			break;
	}

	// Figure out vertical padding
	if (verticalPadding === "loose") {
		variantClassname += " page-header--vertical-padding-loose";
	}

	// Figure out grid
	const mainSectionColumns = secondSection ? 9 : 12;

	// TODO: Refactor this into some sort of conditional component
	// e.g. https://dev.to/dailydevtips1/conditional-wrapping-in-react-46o5
	const PageHeaderContent: React.FC = () => {
		const mainContent = (
			<>
				{breadcrumbs && (
					<div className="page-header__breadcrumbs">{breadcrumbs}</div>
				)}
				<h1
					className={`page-header__heading ${
						useAltHeading ? "page-header__heading--alt" : ""
					}`}
				>
					{preheading && (
						<span className="page-header__pre-heading">{preheading}</span>
					)}
					{heading}
				</h1>
				{lead && <p className="page-header__lead">{lead}</p>}
				{description && (
					<div className="page-header__description">{description}</div>
				)}
				{metadata && (
					<ul className="page-header__metadata">
						{metadata.map((metadatum, i) => (
							<li key={i}>{metadatum}</li>
						))}
					</ul>
				)}
				{cta && <p className="page-header__cta">{cta}</p>}
			</>
		);

		if (secondSection) {
			return (
				<Grid>
					<GridItem md={{ cols: mainSectionColumns }}>{mainContent}</GridItem>
					<GridItem md={{ cols: 3 }} className="page-header__second-section">
						{secondSection}
					</GridItem>
				</Grid>
			);
		}

		return <>{mainContent}</>;
	};

	return (
		<div
			className={`page-header ${variantClassname}`}
			data-component="page-header"
			{...rest}
		>
			{isFullWidth ? (
				<div className="page-header__full-width-container">
					<PageHeaderContent />
				</div>
			) : (
				<PageHeaderContent />
			)}
		</div>
	);
};
