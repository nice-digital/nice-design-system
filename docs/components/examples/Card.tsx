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
				summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisi enim. In nec lorem ac est cursus sollicitudin molestie vel nunc."
			/>
		</li>
		<li>
			<Card
				headingText="Card title 2"
				summary="In rhoncus, urna sollicitudin blandit interdum, risus mauris malesuada magna, vitae maximus mauris leo ut elit. Integer maximus, nisi at congue volutpat, arcu diam finibus eros, quis tincidunt massa lacus nec ante."
			/>
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
				summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisi enim. In nec lorem ac est cursus sollicitudin molestie vel nunc."
			/>
		</GridItem>
		<GridItem cols={12} sm={{ cols: 4 }}>
			<Card
				headingText="Card title 2"
				link={{
					destination: "https://www.example.com"
				}}
				summary="Nulla risus erat, maximus id semper ut, vulputate non nisl. Pellentesque sed luctus enim."
			/>
		</GridItem>
		<GridItem cols={12} sm={{ cols: 4 }}>
			<Card
				headingText="Card title 3"
				link={{
					destination: "https://www.example.com"
				}}
				summary="Integer maximus, nisi at congue volutpat, arcu diam finibus eros, quis tincidunt massa lacus nec ante."
			/>
		</GridItem>
	</Grid>
);

export const ExampleCardGridWithImages = () => (
	<Grid equalHeight>
		<GridItem cols={12} md={{ cols: 4 }}>
			<Card
				headingText="Card title 1"
				image={<img src="https://picsum.photos/id/272/300/200" alt="" />}
				link={{
					destination: "https://www.example.com"
				}}
				summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisi enim. In nec lorem ac est cursus sollicitudin molestie vel nunc."
				callout
			/>
		</GridItem>
		<GridItem cols={12} md={{ cols: 4 }}>
			<Card
				headingText="Card title 2"
				image={<img src="https://picsum.photos/id/272/300/200" alt="" />}
				link={{
					destination: "https://www.example.com"
				}}
				summary="Nulla risus erat, maximus id semper ut, vulputate non nisl. Pellentesque sed luctus enim."
				callout
			/>
		</GridItem>
		<GridItem cols={12} md={{ cols: 4 }}>
			<Card
				headingText="Card title 3"
				image={<img src="https://picsum.photos/id/272/300/200" alt="" />}
				link={{
					destination: "https://www.example.com"
				}}
				summary="Integer maximus, nisi at congue volutpat, arcu diam finibus eros, quis tincidunt massa lacus nec ante."
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
	<Card
		headingText="Card title 1"
		summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisi enim. In nec lorem ac est cursus sollicitudin molestie vel nunc."
	/>
);

export const ExampleCardWithHeadingLevel = () => (
	<Card
		headingText="Card with heading level 5"
		headingLevel="5"
		summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisi enim. In nec lorem ac est cursus sollicitudin molestie vel nunc."
	/>
);

export const ExampleCardWithImage = () => (
	<Card
		headingText="Card title 1"
		image={<img src="https://picsum.photos/id/272/300/200" alt="" />}
		summary="Integer maximus, nisi at congue volutpat, arcu diam finibus eros, quis tincidunt massa lacus nec ante."
	/>
);

export const ExampleCalloutCard = () => (
	<Card
		headingText="Card title 1"
		summary="Nulla risus erat, maximus id semper ut, vulputate non nisl. Pellentesque sed luctus enim."
		callout
	/>
);

export const ExampleClickableCard = () => (
	<Card
		headingText="Card title 1"
		link={{ destination: "/test" }}
		summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisi enim. In nec lorem ac est cursus sollicitudin molestie vel nunc."
	/>
);

export const ExampleCardWithMetadata = () => (
	<Card
		headingText="Card with metadata"
		metadata={[{ label: "label", value: "value" }, { value: "Another value" }]}
	/>
);

export const ExampleCardWithChildren = () => (
	<Card
		headingText="Improving outcomes in breast cancer (CSG1)"
		link={{ destination: "#" }}
		summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisi enim. In nec lorem ac est cursus sollicitudin molestie vel nunc."
	>
		<Tag consultation>In consultation</Tag> In development
	</Card>
);
