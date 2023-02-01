import Head from "next/head";

import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Button, ButtonProps } from "@nice-digital/nds-button";

export default function Test() {
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
			<Grid gutter="loose">
				<GridItem>
					<Button variant={Button.variants.primary}>I AM BUTTON</Button>
				</GridItem>
			</Grid>
		</>
	);
}
