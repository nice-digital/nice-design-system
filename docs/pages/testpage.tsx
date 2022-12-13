import Head from "next/head";

import { EnhancedPagination } from "@nice-digital/nds-enhanced-pagination";

const mapPageNumberToHref = (pageNumber: number) => `#${pageNumber}`;

export default function Test() {
	const allLetters = "abcdefghijklmnopqrstuvwxyz".split("");

	return (
		<>
			<Head>
				<title>NDS Test page!</title>
			</Head>
			<h1>Test page!</h1>
			<p>
				We can use this page as a scratch pad for developing/testing components
				outside of the docs.
			</p>
			<p>
				MDX files don&apos;t have great Typescript integration, so it can
				sometimes be hard to debug components using MDX alone.
			</p>
			<EnhancedPagination
				currentPage={32}
				mapPageNumberToHref={mapPageNumberToHref}
				totalPages={49}
			/>
		</>
	);
}
