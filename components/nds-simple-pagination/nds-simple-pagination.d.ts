declare module "@nice-digital/nds-simple-pagination" {
	import * as React from "react";

	interface PageLinkProps {
		destination?: string;
		elementType?: React.ElementType;
	}

	export interface SimplePaginationProps {
		currentPage: number;
		totalPages?: number;
		nextPageLink: PageLinkProps | null;
		previousPageLink: PageLinkProps | null;
	}

	export const SimplePagination: React.FC<SimplePaginationProps>;
}

##### link.destination

- Type: `string`
- Default: `null`

A string to represent the destination if the card heading is a link.

	##### link.elementType

- Type: `React.ElementType`
- Default: `a`

The tag that you would like to use for the heading link. By default it's an HTMLAnchorElement and will result in something like `<a href="/destination">Card heading text</a>` but you can pass a custom router link tag such as `Link` to result in `<Link to="/destination">Card heading text</Link>`.
