import Link from "next/link";
import { useRouter } from "next/router";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";

interface linkType {
	name: string;
	destination: string;
}

// Build links that will make up the menu
const links: linkType[] = [
	{
		name: "Community",
		destination: "/community/"
	},
	{
		name: "Proposing a component or pattern",
		destination: "/community/proposing-a-component/"
	},
	{
		name: "Requesting a component or pattern",
		destination: "/community/requesting-a-component/"
	},
	{
		name: "Component criteria",
		destination: "/community/component-criteria/"
	}
];

export function CommunityMenu() {
	const { asPath } = useRouter();

	return (
		<StackedNav label="Community" elementType="h2">
			{links.map(({ name, destination }) => (
				<StackedNavLink
					elementType={Link}
					method="href"
					destination={destination}
					isCurrent={asPath === destination}
					key={name}
				>
					{name}
				</StackedNavLink>
			))}
		</StackedNav>
	);
}
