/* eslint-disable @next/next/no-img-element */
import { Example } from "./Example";
import { Card } from "@nice-digital/nds-card";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Tag } from "@nice-digital/nds-tag";

export const ExampleCardList = () => (
	<ul className="list--unstyled">
		<li>
			<Card headingText="Card title 1" link={{ destination: "/test" }}>
				Card text 1
			</Card>
		</li>
		<li>
			<Card headingText="Card title 2">Card text 2</Card>
		</li>
	</ul>
);

export const ExampleCardListWithImages = () => (
	<ul className="list--unstyled">
		<li>
			<ExampleCardWithImage />
		</li>
		<li>
			<ExampleCardWithImage />
		</li>
	</ul>
);

export const ExampleCardGrid = () => (
	<Grid equalHeight>
		<GridItem cols={12} sm={{ cols: 4 }}>
			<Card
				headingText="Card title 1"
				image={<img src="https://picsum.photos/id/272/300/200" alt="" />}
				link={{
					destination: "https://www.example.com"
				}}
				callout
			>
				Card text
			</Card>
		</GridItem>
		<GridItem cols={12} sm={{ cols: 4 }}>
			<Card
				headingText="Card title 2"
				image={<img src="https://picsum.photos/id/272/300/200" alt="" />}
				link={{
					destination: "https://www.example.com"
				}}
				callout
			>
				Nulla risus erat, maximus id semper ut, vulputate non nisl. Pellentesque
				sed luctus enim.
			</Card>
		</GridItem>
		<GridItem cols={12} sm={{ cols: 4 }}>
			<Card
				headingText="Card title 3"
				image={<img src="https://picsum.photos/id/272/300/200" alt="" />}
				link={{
					destination: "https://www.example.com"
				}}
				callout
			>
				Card text
			</Card>
		</GridItem>
	</Grid>
);

export const ExampleGuidanceList = () => (
	<ul className="list--unstyled">
		<li>
			<Card
				headingText="Improving outcomes in breast cancer (CSG1)"
				link={{ destination: "/test" }}
			>
				<Tag consultation>In consultation</Tag> In development
			</Card>
		</li>
		<li>
			<Card
				headingText="Suspected cancer (QS124)"
				link={{ destination: "/test" }}
			>
				Published: <time>31st December 2022</time>
			</Card>
		</li>
	</ul>
);

export const ExampleCard = () => (
	<Card headingText="Card title 1">Card text 1</Card>
);

export const ExampleCardWithImage = () => (
	<Card
		headingText="Card title 1"
		image={<img src="https://picsum.photos/id/272/300/200" alt="" />}
	>
		Card text 1
	</Card>
);

export const ExampleCalloutCard = () => (
	<Card headingText="Card title 1" callout>
		Card text 1
	</Card>
);

export const ExampleClickableCard = () => (
	<Card headingText="Card title 1" link={{ destination: "/test" }}>
		Card text 1
	</Card>
);

export const ExampleCardWithMetadata = () => (
	<Card
		headingText="Card with metadata"
		metadata={[{ label: "label", value: "value" }, { value: "Another value" }]}
	/>
);
