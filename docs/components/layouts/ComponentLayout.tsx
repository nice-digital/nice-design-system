import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import { type PageMeta } from "types/meta";
import styles from "./ComponentLayout.module.scss";

export interface ComponentLayoutProps {
	children: ReactNode;
	meta: PageMeta;
}

export function ComponentLayout({ children, meta }: ComponentLayoutProps) {
	const shouldShowExternalLinks = meta.gitHubUrl || meta.npmUrl;

	return (
		<>
			<Head>
				<title>{`${meta.title} | NICE Design System`}</title>
			</Head>
			TODO: Add breadcrumbs here
			<Grid>
				<GridItem cols={12} md={{ cols: 2 }}>
					<StackedNav label="Components menu" elementType="h2">
						<StackedNavLink elementType={Link} method="href" destination="/">
							NDS Docs Home
						</StackedNavLink>
						<StackedNavLink
							elementType={Link}
							method="href"
							destination="/components/action-banner"
						>
							Action Banner
						</StackedNavLink>
					</StackedNav>
				</GridItem>
				<GridItem cols={12} md={{ cols: 8 }}>
					{children}
				</GridItem>
				<GridItem cols={12} md={{ cols: 2 }}>
					<p>TODO: Add on-page nav</p>

					{shouldShowExternalLinks && (
						<ul className={styles.externalLinkList}>
							{meta.gitHubUrl && (
								<li>
									<a
										className={`btn btn--secondary ${styles.externalSiteButton}`}
										href={meta.gitHubUrl}
									>
										<img src="/github.svg" alt="" />
										View on GitHub
									</a>
								</li>
							)}
							{meta.npmUrl && (
								<li>
									<a
										className={`btn btn--secondary ${styles.externalSiteButton}`}
										href={meta.npmUrl}
									>
										<img src="/npm.svg" alt="" />
										View on NPM
									</a>
								</li>
							)}
						</ul>
					)}
				</GridItem>
			</Grid>
		</>
	);
}
