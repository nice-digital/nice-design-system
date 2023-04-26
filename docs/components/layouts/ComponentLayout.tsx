import { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import { InPageNav } from "@nice-digital/nds-in-page-nav";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import { type PageMeta } from "types/PageMeta";
import { SidebarMenu } from "components/menus/SidebarMenu";
import { capitalise } from "utils/utils";
import styles from "./ComponentLayout.module.scss";

export interface ComponentLayoutProps {
	children: ReactNode;
	meta: PageMeta;
	type: "foundations" | "components";
	isFoundationPage?: boolean;
}

export const ComponentLayout: React.FC<ComponentLayoutProps> = ({
	children,
	meta,
	type = "components"
}: ComponentLayoutProps) => {
	const shouldShowExternalLinks = meta?.gitHubUrl || meta?.npmUrl;

	return (
		<>
			<Head>
				<title>{`${meta.title} | NICE Design System`}</title>
			</Head>
			<Breadcrumbs>
				<Breadcrumb to="/">NICE Design System</Breadcrumb>
				<Breadcrumb to={`/${type}`}>{capitalise(type)}</Breadcrumb>
				<Breadcrumb>{meta.title}</Breadcrumb>
			</Breadcrumbs>
			<Grid>
				<GridItem cols={12} md={{ cols: 2 }}>
					<SidebarMenu type={type}></SidebarMenu>
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
