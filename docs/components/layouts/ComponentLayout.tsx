import { ReactNode } from "react";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import Link from "next/link";

export interface ComponentLayoutProps {
	children: ReactNode;
}

export function ComponentLayout({ children }: ComponentLayoutProps) {
	return (
		<Grid>
			<GridItem cols={12} sm={{ cols: 2 }}>
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
			<GridItem cols={12} sm={{ cols: 10 }}>
				TODO: Add breadcrumbs, on page nav, NPM/GitHub links
				{children}
			</GridItem>
		</Grid>
	);
}
