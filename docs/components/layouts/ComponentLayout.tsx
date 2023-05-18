import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import { InPageNav } from "@nice-digital/nds-in-page-nav";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import { type PageMeta } from "types/PageMeta";
import { SidebarMenu } from "components/menus/SidebarMenu";
import { ComponentHeader } from "components/core/ComponentHeader/ComponentHeader";
import { capitalise } from "utils/utils";

export interface ComponentLayoutProps {
	children: ReactNode;
	meta: PageMeta;
	type: "foundations" | "components";
}

export const ComponentLayout: React.FC<ComponentLayoutProps> = ({
	children,
	meta,
	type = "components"
}: ComponentLayoutProps) => {
	return (
		<>
			<Head>
				<title>{`${meta.title} | NICE Design System`}</title>
			</Head>
			<Breadcrumbs>
				<Breadcrumb to="/">NICE Design System</Breadcrumb>
				<Breadcrumb>{capitalise(type)}</Breadcrumb>
				<Breadcrumb>{meta.title}</Breadcrumb>
			</Breadcrumbs>
			<Grid>
				<GridItem cols={12} md={{ cols: 8, push: 2 }} className="docs-main">
					<ComponentHeader {...meta} />
					{children}
					<h2>Help improve this page</h2>
					<p>
						To help make sure that this page is useful, relevant and up to date,
						you can:
					</p>
					<ul>
						<li>
							<Link href="https://github.com/nice-digital/nice-design-system/discussions">
								Share your research or feedback on GitHub
							</Link>
						</li>
						<li>
							<Link href="https://github.com/nice-digital/nice-design-system/discussions/categories/ideas">
								Propose a change
							</Link>
						</li>
					</ul>
					<h2>Need help?</h2>
					<p>
						If you&apos;ve got a question about the NICE Design System, contact
						the team.
					</p>
					<ul>
						<li>
							If you work for NICE,{" "}
							<Link href="https://teams.microsoft.com/l/team/19%3aj3x65ql6djS-Ro2mM8yQIRzK_QHOk1S3Jl75got7hwk1%40thread.tacv2/conversations?groupId=10c92ff2-b41f-42d1-abef-f34f5bfe1202&tenantId=6030f479-b342-472d-a5dd-740ff7538de9">
								ask us a question in our Teams channel
							</Link>
						</li>
						<li>
							If you work outside of NICE, you can{" "}
							<Link href="https://github.com/nice-digital/nice-design-system/discussions">
								get in touch with us via Github discussions
							</Link>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={{ cols: 2, push: 2 }}>
					<InPageNav
						headingsContainerSelector=".docs-main"
						headingsExcludeSelector=".exclude-in-page-nav"
						headingsExcludeContainer=".exclude-container"
					/>
				</GridItem>
				<GridItem cols={12} md={{ cols: 2, pull: 10 }}>
					<SidebarMenu type={type}></SidebarMenu>
				</GridItem>
			</Grid>
		</>
	);
};
