import { Example } from "./Example";
import { Card } from "@nice-digital/nds-card";
import { Grid, GridItem } from "@nice-digital/nds-grid";

export const ExampleCardList = () => (
	<Example>
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
	</Example>
);

export const ExampleCardGrid = () => (
	<Example>
		<Grid>
			<GridItem cols={12} sm={{ cols: 4 }}>
				<Card headingText="Card title 2">Card text 2</Card>
			</GridItem>
			<GridItem cols={12} sm={{ cols: 4 }}>
				<Card headingText="Card title 2">Card text 2</Card>
			</GridItem>
			<GridItem cols={12} sm={{ cols: 4 }}>
				<Card headingText="Card title 2">Card text 2</Card>
			</GridItem>
		</Grid>
	</Example>
);
