import React from "react";

type TableOfContentsItemType = {
	title: string;
	url: string;
	items: TableOfContentsItemType[] | undefined;
};

type InPageNavPropsType = {
	items: TableOfContentsItemType[];
};

export function InPageNav(
	props: InPageNavPropsType
): React.ReactElement | null {
	return (
		<>
			<h3>On this page</h3>
			{generateInPageNav(props.items)}
		</>
	);
}

function generateInPageNav(nav: TableOfContentsItemType[]) {
	if (!nav) return null;
	return (
		<ul className="inpagenav">
			{nav.map(({ title, url, items }) => {
				return (
					<li key={url}>
						<a href={url}>{title}</a>
						{items && generateInPageNav(items)}
					</li>
				);
			})}
		</ul>
	);
}
