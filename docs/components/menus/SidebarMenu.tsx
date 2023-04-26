import Link from "next/link";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { components } from "../../data/components";
import { foundations } from "../../data/foundations";
import { type PageData } from "types/PageData";
import { capitalise } from "utils/utils";

export interface SidebarMenuProps {
	type: "components" | "foundations";
}

export function SidebarMenu({ type }: SidebarMenuProps) {
	const menuItems: PageData[] =
		type === "foundations" ? foundations : components;

	return (
		<StackedNav label={capitalise(type)} elementType="h2">
			<StackedNavLink elementType={Link} method="href" destination="/">
				NDS Docs Home
			</StackedNavLink>
			<>
				{menuItems.map(({ title, slug }: PageData) => (
					<StackedNavLink
						elementType={Link}
						method="href"
						key={slug}
						destination={`/${type}/${slug}`}
					>
						{title}
					</StackedNavLink>
				))}
			</>
		</StackedNav>
	);
}
