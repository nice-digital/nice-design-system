import React from "react";

import "../scss/page-header.scss";

export interface PageHeaderProps {
	[prop: string]: unknown;
	useAltHeading?: boolean;
	isFullWidth?: boolean;
	preheading?: React.ReactNode;
	breadcrumbs?: React.ReactNode;
	heading: React.ReactNode;
	metadata?: React.ReactNode[];
	lead?: React.ReactNode;
	description?: React.ReactNode;
	cta?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = (
	props: PageHeaderProps
) => {
	const {
		useAltHeading = false,
		isFullWidth = false,
		preheading,
		breadcrumbs,
		heading,
		metadata,
		lead,
		description,
		cta,
		...rest
	} = props;

	// TODO: Refactor this into some sort of conditional component
	// e.g. https://dev.to/dailydevtips1/conditional-wrapping-in-react-46o5
	const PageHeaderContent: React.FC = () => (
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

	return (
		<div
			className={`page-header ${isFullWidth ? "page-header--full-width" : ""}`}
			data-component="page-header"
			{...rest}
		>
			{isFullWidth ? (
				<div className="container">
					<PageHeaderContent />
				</div>
			) : (
				<PageHeaderContent />
			)}
		</div>
	);
};
