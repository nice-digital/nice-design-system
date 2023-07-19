import Link from "next/link";
import { useRouter } from "next/router";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { components } from "../../data/components";
import { foundations } from "../../data/foundations";
import { type PageData } from "types/PageData";
import { capitalise } from "utils/utils";

export interface ComponentMenuProps {
	type: "components" | "foundations";
}

export function ComponentMenu({ type }: ComponentMenuProps) {
	const { asPath } = useRouter(),
		urlArray = asPath.split("/"),
		pageSlug = urlArray[urlArray.length - 2]; // Infer slug from part of URL preceding final slash

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
						isCurrent={slug === pageSlug}
						destination={`/${type}/${slug}`}
					>
						{title}
					</StackedNavLink>
				))}
			</>
		</StackedNav>
	);
}
