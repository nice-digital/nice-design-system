import React from "react";
import { InPageNav } from "@nice-digital/nds-in-page-nav";
import { Container } from "@nice-digital/nds-container";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import { storiesOf } from "@storybook/react";

const Default = () => (
	<Container>
		<Grid reverse>
			<GridItem cols={12} md={4}>
				<InPageNav
					headingsContainerSelector=".js-in-page-nav-headings-container"
					headingsExcludeSelector=".js-in-page-nav-ignore"
				/>
			</GridItem>
			<GridItem cols={12} md={8} className="js-in-page-nav-headings-container">
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
				<h2 className="mt--0">A heading</h2>
				<h3 id="id-already-here">With a sub heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>Another h2</h2>
				<p>Dolor sit amet</p>
				<h3>And another h3</h3>
				<p>Some text content</p>
				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
			</GridItem>
		</Grid>
	</Container>
);

storiesOf("Components/In Page Nav", module).add("Default", Default);
