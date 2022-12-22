import React from "react";

import "../scss/page-header.scss";

export interface PageHeaderProps {
	[prop: string]: unknown;
	useAltHeading?: boolean;
	preheading?: React.ReactNode;
	heading: React.ReactNode;
	lead?: React.ReactNode;
	metadata?: React.ReactNode[];
	cta?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = (
	props: PageHeaderProps
) => {
	const {
		heading,
		useAltHeading = false,
		lead,
		metadata,
		cta,
		preheading,
		...rest
	} = props;

	return (
		<div className="page-header" {...rest}>
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

			{metadata && (
				<ul className="page-header__metadata">
					{metadata.map((metadatum, i) => (
						<li key={i}>{metadatum}</li>
					))}
				</ul>
			)}

			{cta && <p className="page-header__cta">{cta}</p>}
		</div>
	);
};
