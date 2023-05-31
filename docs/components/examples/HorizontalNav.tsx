import {
	HorizontalNav,
	HorizontalNavLink
} from "@nice-digital/nds-horizontal-nav";

export const DefaultNav = () => (
	<HorizontalNav aria-label="My navigation">
		<HorizontalNavLink destination="/">Home</HorizontalNavLink>
		<HorizontalNavLink isCurrent destination="/about-us">
			About
		</HorizontalNavLink>
		<HorizontalNavLink destination="/contact">Contact</HorizontalNavLink>
	</HorizontalNav>
);
