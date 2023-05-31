import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";

export const DefaultStackedNav = () => (
	<StackedNav label="Stacked nav label" elementType="h2">
		<StackedNavLink destination="/">Home</StackedNavLink>
		<StackedNavLink
			destination="/about"
			nested={
				<StackedNavLink destination="/about/test">Nested page</StackedNavLink>
			}
		>
			About
		</StackedNavLink>
	</StackedNav>
);
