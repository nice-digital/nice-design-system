import { ReactNode } from "react";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { Grid, GridItem } from "@nice-digital/nds-grid";

export interface ComponentLayoutProps {
	children: ReactNode;
}

export function ComponentLayout({ children }: ComponentLayoutProps) {
	return (
		<Grid>
			<GridItem cols={12} sm={{ cols: 2 }}>
				<StackedNav label="Components" elementType="h2">
					<StackedNavLink to="/1">Component 1</StackedNavLink>
					<StackedNavLink to="/2">Component 2</StackedNavLink>
				</StackedNav>
			</GridItem>
			<GridItem cols={12} sm={{ cols: 10 }}>
				{children}
			</GridItem>
		</Grid>
	);
}
