import { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import { type PageMeta } from "types/meta";
import styles from "./ComponentLayout.module.scss";

export interface ComponentLayoutProps {
	children: ReactNode;
	meta: PageMeta;
}

interface MenuLink {
	title: string;
	slug: string;
}

export const ComponentLayout: React.FC<ComponentLayoutProps> = ({
	children,
	meta
}: ComponentLayoutProps) => {
	const shouldShowExternalLinks = meta?.gitHubUrl || meta?.npmUrl;
	const menuLinks: MenuLink[] = [
		{
			title: "A-Z List",
			slug: "a-z-list"
		},
		{
			title: "Action Banner",
			slug: "action-banner"
		},
		{
			title: "Alert",
			slug: "alert"
		},
		{
			title: "Alphabet",
			slug: "alphabet"
		},
		{
			title: "Breadcrumbs",
			slug: "breadcrumbs"
		},
		{
			title: "Button",
			slug: "button"
		},
		{
			title: "Checkbox",
			slug: "checkbox"
		},
		{
			title: "Container",
			slug: "container"
		},
		{
			title: "Grid",
			slug: "grid"
		},
		{
			title: "Hero",
			slug: "hero"
		},
		{
			title: "Stacked nav",
			slug: "stacked-nav"
		}
	];

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
				</GridItem>
			</Grid>
		</>
	);
};
