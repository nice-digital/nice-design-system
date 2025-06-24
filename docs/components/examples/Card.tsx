/* eslint-disable @next/next/no-img-element */
import { Card } from "@nice-digital/nds-card";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Tag } from "@nice-digital/nds-tag";

export const ExampleCardList = () => (
	<ul className="list--unstyled">
		<li>
			<Card
				headingText="Card title 1"
				link={{ destination: "/test" }}
				summary="Card text 1"
			/>
		</li>
		<li>
			<Card headingText="Card title 2" summary="Card text 2" />
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
				link={{
					destination: "https://www.example.com"
				}}
				summary="Card text"
			/>
		</GridItem>
		<GridItem cols={12} sm={{ cols: 4 }}>
			<Card
				headingText="Card title 2"
				link={{
					destination: "https://www.example.com"
				}}
				summary="Nulla risus erat, maximus id semper ut, vulputate non nisl. Pellentesque
				sed luctus enim."
			/>
		</GridItem>
		<GridItem cols={12} sm={{ cols: 4 }}>
			<Card
				headingText="Card title 3"
				link={{
					destination: "https://www.example.com"
				}}
				summary="Card text"
			/>
		</GridItem>
	</Grid>
);

export const ExampleCardGridWithImages = () => (
	<Grid equalHeight>
		<GridItem cols={12} sm={{ cols: 4 }}>
			<Card
				headingText="Card title 1"
				image={<img src="https://picsum.photos/id/272/300/200" alt="" />}
				link={{
					destination: "https://www.example.com"
				}}
				summary="Card text"
				callout
			/>
		</GridItem>
		<GridItem cols={12} sm={{ cols: 4 }}>
			<Card
				headingText="Card title 2"
				image={<img src="https://picsum.photos/id/272/300/200" alt="" />}
				link={{
					destination: "https://www.example.com"
				}}
				summary="Nulla risus erat, maximus id semper ut, vulputate non nisl. Pellentesque
				sed luctus enim."
				callout
			/>
		</GridItem>
		<GridItem cols={12} sm={{ cols: 4 }}>
			<Card
				headingText="Card title 3"
				image={<img src="https://picsum.photos/id/272/300/200" alt="" />}
				link={{
					destination: "https://www.example.com"
				}}
				summary="Card text"
				callout
			/>
		</GridItem>
	</Grid>
);

export const ExampleGuidanceList = () => (
	<ul className="list--unstyled">
		<li>
			<Card
				headingText="Improving outcomes in breast cancer (CSG1)"
				link={{ destination: "/test" }}
				summary={
					<>
						<Tag consultation>In consultation</Tag> In development
					</>
				}
			/>
		</li>
		<li>
			<Card
				headingText="Suspected cancer (QS124)"
				link={{ destination: "/test" }}
				summary={
					<>
						Published: <time>31st December 2022</time>
					</>
				}
			/>
		</li>
	</ul>
);

export const ExampleCard = () => (
	<Card headingText="Card title 1" summary="Card text 1" />
);

export const ExampleCardWithImage = () => (
	<Card
		headingText="Card title 1"
		image={<img src="https://picsum.photos/id/272/300/200" alt="" />}
		summary="Card text 1"
	/>
);

export const ExampleCalloutCard = () => (
	<Card headingText="Card title 1" summary="Card text 1" callout />
);

export const ExampleClickableCard = () => (
	<Card
		headingText="Card title 1"
		link={{ destination: "/test" }}
		summary="Card text 1"
	/>
);

export const ExampleCardWithMetadata = () => (
	<Card
		headingText="Card with metadata"
		metadata={[{ label: "label", value: "value" }, { value: "Another value" }]}
	/>
);
