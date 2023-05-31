import { Grid, GridItem } from "@nice-digital/nds-grid";

export const Whole = () => (
	<Grid>
		<GridItem>Whole</GridItem>
	</Grid>
);

export const Halves = () => (
	<Grid>
		<GridItem cols={6}>1/2</GridItem>
		<GridItem cols={6}>1/2</GridItem>
	</Grid>
);

export const Thirds = () => (
	<Grid>
		<GridItem cols={4}>1/3</GridItem>
		<GridItem cols={8}>2/3</GridItem>
	</Grid>
);

export const Quarters = () => (
	<Grid>
		<GridItem cols={3}>1/4</GridItem>
		<GridItem cols={3}>1/4</GridItem>
		<GridItem cols={3}>1/4</GridItem>
		<GridItem cols={3}>1/4</GridItem>
	</Grid>
);

export const Nested = () => (
	<Grid>
		<GridItem cols={8}>
			<Grid>
				<GridItem cols={4}>Nested 1/3</GridItem>
				<GridItem cols={8}>Nested 2/3</GridItem>
			</Grid>
		</GridItem>
		<GridItem cols={4}>1/3</GridItem>
	</Grid>
);

export const Responsive = () => (
	<Grid>
		<GridItem cols={12} sm={{ cols: 4 }}>
			12 cols on mobile, 4 cols on sm
		</GridItem>
		<GridItem cols={12} sm={{ cols: 8 }}>
			12 cols on mobile, 8 cols on sm
		</GridItem>
	</Grid>
);

export const Reversed = () => (
	<Grid reverse>
		<GridItem cols={12} sm={{ cols: 4 }}>
			12 cols on mobile, 4 cols on sm
		</GridItem>
		<GridItem cols={12} sm={{ cols: 8 }}>
			12 cols on mobile, 8 cols on sm
		</GridItem>
	</Grid>
);

export const Gutterless = () => (
	<Grid gutter="none">
		<GridItem cols={6}>1/2</GridItem>
		<GridItem cols={6}>1/2</GridItem>
	</Grid>
);

export const Compact = () => (
	<Grid gutter="compact">
		<GridItem cols={6}>1/2</GridItem>
		<GridItem cols={6}>1/2</GridItem>
	</Grid>
);

export const Loose = () => (
	<Grid gutter="loose">
		<GridItem cols={6}>1/2</GridItem>
		<GridItem cols={6}>1/2</GridItem>
	</Grid>
);

export const Right = () => (
	<Grid horizontalAlignment="right">
		<GridItem cols={4}>1/3</GridItem>
		<GridItem cols={4}>1/3</GridItem>
	</Grid>
);

export const Center = () => (
	<Grid horizontalAlignment="center">
		<GridItem cols={4}>1/3</GridItem>
		<GridItem cols={4}>1/3</GridItem>
	</Grid>
);

export const PushPull = () => (
	<Grid horizontalAlignment="center">
		<GridItem cols={12} sm={{ cols: 3, pull: 2 }}>
			3 cols, pull 2 on sm
		</GridItem>
		<GridItem cols={12} sm={{ cols: 3, push: 1 }}>
			3 cols, push 1 on sm
		</GridItem>
	</Grid>
);

export const VerticalMiddle = () => (
	<Grid verticalAlignment="middle">
		<GridItem cols={6}>
			Large
			<br />
			grid
			<br />
			item
		</GridItem>
		<GridItem cols={6}>Small item</GridItem>
	</Grid>
);

export const VerticalBottom = () => (
	<Grid verticalAlignment="bottom">
		<GridItem cols={6}>
			Large
			<br />
			grid
			<br />
			item
		</GridItem>
		<GridItem cols={6}>Small item</GridItem>
	</Grid>
);

export const Debug = () => (
	<Grid debug horizontalAlignment="center">
		<GridItem cols={12} sm={{ cols: 3, pull: 1 }}>
			12 cols on mobile, 4 cols on sm
		</GridItem>
		<GridItem cols={12} sm={{ cols: 3, push: 1 }}>
			12 cols on mobile, 8 cols on sm
		</GridItem>
	</Grid>
);

export const Semantic = () => (
	<Grid elementType="ul">
		<GridItem elementType="li" cols={6}>
			1/2
		</GridItem>
		<GridItem elementType="li" cols={6}>
			1/2
		</GridItem>
	</Grid>
);
