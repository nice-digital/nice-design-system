import { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import { InPageNav } from "@nice-digital/nds-in-page-nav";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import { type PageMeta } from "types/meta";
import styles from "./ComponentLayout.module.scss";
import { menuLinks } from "./ComponentMenuLinks";

export interface ComponentLayoutProps {
	children: ReactNode;
	meta: PageMeta;
}

export const ComponentLayout: React.FC<ComponentLayoutProps> = ({
	children,
	meta
}: ComponentLayoutProps) => {
	const shouldShowExternalLinks = meta?.gitHubUrl || meta?.npmUrl;

	return (
		<>
			<Head>
				<title>{`${meta.title} | NICE Design System`}</title>
			</Head>
			<Breadcrumbs>
				<Breadcrumb to="/">NICE Design System</Breadcrumb>
				<Breadcrumb to="/components">Components</Breadcrumb>
				<Breadcrumb>{meta.title}</Breadcrumb>
			</Breadcrumbs>
			<Grid>
				<GridItem cols={12} md={{ cols: 2 }}>
					<StackedNav label="Components menu" elementType="h2">
						<StackedNavLink elementType={Link} method="href" destination="/">
							NDS Docs Home
						</StackedNavLink>
						<>
							{menuLinks.map(({ title, slug }) => (
								<StackedNavLink
									elementType={Link}
									method="href"
									key={slug}
									destination={`/components/${slug}`}
								>
									{title}
								</StackedNavLink>
							))}
						</>
					</StackedNav>
				</GridItem>
				<GridItem cols={12} md={{ cols: 8 }} className="docs-main">
					{children}
				</GridItem>
				<GridItem cols={12} md={{ cols: 2 }}>
					{shouldShowExternalLinks && (
						<ul className={styles.externalLinkList}>
							{meta.gitHubUrl && (
								<li>
									<a
										className={`btn btn--secondary ${styles.externalSiteButton}`}
										href={meta.gitHubUrl}
									>
										<Image src="/github.svg" alt="" width={30} height={30} />
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
										<Image src="/npm.svg" alt="" width={30} height={30} />
										View on NPM
									</a>
								</li>
							)}
						</ul>
					)}

					<InPageNav
						headingsContainerSelector=".docs-main"
						headingsExcludeSelector=".exclude-in-page-nav"
					/>
				</GridItem>
			</Grid>
		</>
	);
};
